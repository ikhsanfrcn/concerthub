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
exports.UserController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../helpers/cloudinary");
class UserController {
    getProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                    select: {
                        id: true,
                        name: true,
                        lastName: true,
                        email: true,
                        zipCode: true,
                        state: true,
                        city: true,
                        street: true,
                        houseNumber: true,
                        dob: true,
                        phoneNumber: true,
                        referralCode: true,
                        avatar: true,
                    },
                });
                if (!user) {
                    res.status(404).json({ message: "User not found" });
                }
                res.status(200).json({ message: "Profile", user });
            }
            catch (error) {
                res.status(500).json({ message: error });
                console.log(error);
            }
        });
    }
    updateProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
            const { name, lastName, email, zipCode, state, city, street, houseNumber, phoneNumber, dob, regionNumber, avatar, } = req.body;
            try {
                const user = yield prisma_1.default.user.findUnique({
                    where: { id: userId },
                });
                if (!user)
                    throw { message: "User not found" };
                const updatedUser = yield prisma_1.default.user.update({
                    where: { id: userId },
                    data: {
                        name,
                        lastName,
                        email,
                        zipCode,
                        state,
                        city,
                        street,
                        houseNumber,
                        dob,
                        phoneNumber,
                        regionNumber,
                        avatar,
                    },
                });
                res.status(201).json({
                    message: "Profile updated successfully",
                    user: updatedUser,
                });
            }
            catch (error) {
                res.status(500).json({ message: error });
                console.log(error);
            }
        });
    }
    updateAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                if (!req.file)
                    throw { message: "No image uploaded." };
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "ConcertHub");
                if (!((_a = req.user) === null || _a === void 0 ? void 0 : _a.id)) {
                    throw res.status(401).json({ message: "Unauthorized" });
                }
                yield prisma_1.default.user.update({
                    where: { id: req.user.id },
                    data: {
                        avatar: secure_url,
                    },
                });
                res.status(200).json({ message: "Profile photo updated successfully", avatar: secure_url });
            }
            catch (error) {
                console.error("Update profile error:", error);
                res.status(400).json({
                    message: "Failed to update profile photo",
                    error
                });
            }
        });
    }
}
exports.UserController = UserController;
