"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcrypt_1 = __importStar(require("bcrypt"));
const jsonwebtoken_1 = require("jsonwebtoken");
const mailer_1 = require("../helpers/mailer");
const fs_1 = __importDefault(require("fs"));
const handlebars_1 = __importDefault(require("handlebars"));
const path_1 = __importDefault(require("path"));
class AuthController {
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password, referralCode } = req.body;
            try {
                const existingUser = yield prisma_1.default.user.findUnique({ where: { email } });
                if (existingUser) {
                    res.status(400).json({ message: "Email already registered" });
                    return;
                }
                const salt = yield (0, bcrypt_1.genSalt)(10);
                const hashedPassword = yield bcrypt_1.default.hash(password, salt);
                const generatedReferralCode = Math.random()
                    .toString(36)
                    .substring(2, 10)
                    .toUpperCase();
                let ReferredById = undefined;
                if (referralCode) {
                    const referrer = yield prisma_1.default.user.findUnique({
                        where: { referralCode },
                    });
                    if (!referrer) {
                        res.status(400).json({ message: "Invalid referral code" });
                        return;
                    }
                    ReferredById = referrer === null || referrer === void 0 ? void 0 : referrer.id;
                }
                const user = yield prisma_1.default.user.create({
                    data: {
                        name,
                        email,
                        password: hashedPassword,
                        referralCode: generatedReferralCode,
                        ReferredById,
                    },
                });
                const payLoad = { id: user.id, role: "CUSTOMER" };
                const token = (0, jsonwebtoken_1.sign)(payLoad, process.env.JWT_SECRET, {
                    expiresIn: "10m",
                });
                const link = `${process.env.BASE_URL_FRONTEND}/verify/customer/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates", `verify.hbs`);
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const html = compiledTemplate({ name, link });
                yield mailer_1.transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: email,
                    subject: "Verification email",
                    html: html,
                });
                res.status(201).json({ message: "User registered", user });
            }
            catch (error) {
                console.error("Register error:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    verify(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    res.status(401).json({ message: "Unauthorized" });
                }
                const user = yield prisma_1.default.user.update({
                    data: { isVerify: true },
                    where: { id: userId },
                });
                if (user.ReferredById) {
                    const referrer = yield prisma_1.default.user.findUnique({
                        where: { id: user.ReferredById },
                    });
                    yield prisma_1.default.point.create({
                        data: {
                            userId: user.ReferredById,
                            amount: 10000,
                            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
                        },
                    });
                    const voucher = yield prisma_1.default.voucher.create({
                        data: {
                            userId: user.id,
                            voucherType: "REFERRAL",
                            discountPercent: 10,
                            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
                        },
                    });
                    yield prisma_1.default.referralUsage.create({
                        data: {
                            referrerId: referrer.id,
                            referredId: user.id,
                            voucherId: voucher.id,
                        },
                    });
                }
                res.status(200).json({ message: "Verification Success" });
            }
            catch (error) {
                console.log("Verify error:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield prisma_1.default.user.findUnique({ where: { email } });
                if (!user)
                    throw { message: "User not found" };
                if (!user.isVerify)
                    throw { message: "Account is not verified" };
                const isValidPass = yield (0, bcrypt_1.compare)(password, user.password);
                if (!isValidPass)
                    throw { message: "Invalid password" };
                const payload = { id: user.id, role: user.role };
                const access_token = (0, jsonwebtoken_1.sign)(payload, process.env.JWT_SECRET, {
                    expiresIn: "1h",
                });
                res
                    .status(200)
                    .json({ message: "Login success", data: user, access_token });
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        });
    }
    registerOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                // console.log("Headers received:", req.headers);
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                }
                const payLoad = { id: user === null || user === void 0 ? void 0 : user.id, email: user === null || user === void 0 ? void 0 : user.email };
                const token = (0, jsonwebtoken_1.sign)(payLoad, process.env.JWT_SECRET, {
                    expiresIn: "10m",
                });
                const link = `${process.env.BASE_URL_FRONTEND}/verify/organizer/${token}`;
                const templatePath = path_1.default.join(__dirname, "../templates", `verifyOrganizer.hbs`);
                const templateSource = fs_1.default.readFileSync(templatePath, "utf-8");
                const compiledTemplate = handlebars_1.default.compile(templateSource);
                const name = user === null || user === void 0 ? void 0 : user.name;
                const html = compiledTemplate({ name, link });
                yield mailer_1.transporter.sendMail({
                    from: process.env.GMAIL_USER,
                    to: user === null || user === void 0 ? void 0 : user.email,
                    subject: "Verification email",
                    html: html,
                });
                res.status(201).json({ message: "User registered", user });
            }
            catch (error) {
                console.error("Register error:", error);
                res.status(500).json({ message: "Internal server error" });
            }
        });
    }
    verifyOrganizer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                yield prisma_1.default.user.update({
                    data: { role: "ORGANIZER" },
                    where: { id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id },
                });
                res.status(200).send({ message: "Verification Success!" });
            }
            catch (error) {
                console.log(error);
                res.status(500).send(error);
            }
        });
    }
}
exports.AuthController = AuthController;
