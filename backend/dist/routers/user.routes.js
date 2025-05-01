"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const uploader_1 = require("../helpers/uploader");
class UserRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.userController = new user_controller_1.UserController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/profile", this.authMiddleware.verifyToken, this.userController.getProfile);
        this.router.patch('/profile-update', this.authMiddleware.verifyToken, this.userController.updateProfile);
        this.router.patch('/avatar-update', (0, uploader_1.uploader)("memoryStorage", "av-").single("avatar"), this.authMiddleware.verifyToken, this.userController.updateAvatar);
    }
    getRouter() {
        return this.router;
    }
}
exports.UserRouter = UserRouter;
