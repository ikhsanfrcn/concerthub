"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const transaction_controller_1 = require("../controller/transaction.controller");
class TransactionRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.transactionController = new transaction_controller_1.TransactionController();
        this.auth = new auth_middleware_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.auth.verifyToken, this.transactionController.getTransactions);
        this.router.post("/", this.auth.verifyToken, this.transactionController.createTransaction);
        this.router.post("/status", this.transactionController.updateTransaction);
        this.router.get("/pending", this.transactionController.getUserPendingTransactions);
    }
    getRouter() {
        return this.router;
    }
}
exports.TransactionRouter = TransactionRouter;
