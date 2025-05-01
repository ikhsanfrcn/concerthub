"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSessionRouter = void 0;
const express_1 = require("express");
const eventSession_controller_1 = require("../controller/eventSession.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
class EventSessionRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.controller = new eventSession_controller_1.EventSessionController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.get("/", this.controller.getSessions);
        this.router.post('/', this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.controller.createSession);
        this.router.delete('/:id', this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.controller.deleteSession);
    }
    getRouter() {
        return this.router;
    }
}
exports.EventSessionRouter = EventSessionRouter;
