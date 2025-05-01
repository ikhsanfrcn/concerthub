"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizerRouter = void 0;
const express_1 = require("express");
const organizer_controller_1 = require("../controller/organizer.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
class OrganizerRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.organizerController = new organizer_controller_1.OrganizerController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get('/myevents', this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.organizerController.getUserEvent);
    }
    getRouter() {
        return this.router;
    }
}
exports.OrganizerRouter = OrganizerRouter;
