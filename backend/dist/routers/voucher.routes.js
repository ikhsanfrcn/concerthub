"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoucherRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const voucher_controller_1 = require("../controller/voucher.controller");
class VoucherRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.voucherController = new voucher_controller_1.VoucherController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/vouchers", this.authMiddleware.verifyToken, this.voucherController.getUserVoucher);
        this.router.get("/points", this.authMiddleware.verifyToken, this.voucherController.getUserPoints);
    }
    getRouter() {
        return this.router;
    }
}
exports.VoucherRouter = VoucherRouter;
