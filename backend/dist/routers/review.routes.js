"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewRouter = void 0;
const express_1 = require("express");
const auth_middleware_1 = require("../middleware/auth.middleware");
const review_controller_1 = require("../controller/review.controller");
class ReviewRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.reviewcontroller = new review_controller_1.ReviewController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get("/", this.reviewcontroller.getReview);
        this.router.post("/", this.authMiddleware.verifyToken, this.reviewcontroller.createReview);
    }
    getRouter() {
        return this.router;
    }
}
exports.ReviewRouter = ReviewRouter;
