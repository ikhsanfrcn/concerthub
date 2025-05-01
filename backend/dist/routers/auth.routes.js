"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRouter = void 0;
const express_1 = require("express");
const auth_controller_1 = require("../controller/auth.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const validation_1 = require("../middleware/validation");
class AuthRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.authController = new auth_controller_1.AuthController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRoute();
    }
    initializeRoute() {
        this.router.post("/register", validation_1.validateRegister, this.authController.register);
        this.router.patch("/verify", this.authMiddleware.verifyToken, this.authController.verify);
        this.router.post("/login", this.authController.login);
        this.router.post('/register/organizer', this.authMiddleware.verifyToken, this.authController.registerOrganizer);
        this.router.patch("/verify/organizer", this.authMiddleware.verifyToken, this.authController.verifyOrganizer);
    }
    getRouter() {
        return this.router;
    }
}
exports.AuthRouter = AuthRouter;
