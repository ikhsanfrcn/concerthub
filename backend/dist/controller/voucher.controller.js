"use strict";
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
exports.VoucherController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class VoucherController {
    getUserVoucher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    res.status(400).send({
                        message: "User not authenticated",
                    });
                }
                const vouchers = yield prisma_1.default.voucher.findMany({
                    where: {
                        userId: userId,
                        used: false,
                        expiresAt: {
                            gt: new Date()
                        }
                    },
                    include: {
                        ReferralUsage: true,
                    },
                });
                res.status(200).send({
                    message: "Vouchers retrieved successfully",
                    vouchers,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).send({ err });
            }
        });
    }
    getUserPoints(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!userId) {
                    res.status(404).send({
                        message: "User not authenticated",
                    });
                }
                const points = yield prisma_1.default.point.findMany({
                    where: {
                        userId: userId,
                        used: false,
                        expiresAt: {
                            gt: new Date()
                        }
                    },
                });
                res.status(200).send({
                    message: "Points retrieved successfully",
                    points,
                });
            }
            catch (err) {
                console.error(err);
                res.status(500).send({ err });
            }
        });
    }
}
exports.VoucherController = VoucherController;
