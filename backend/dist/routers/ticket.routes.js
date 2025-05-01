"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketRouter = void 0;
const express_1 = require("express");
const ticket_controller_1 = require("../controller/ticket.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
class TicketRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.ticketController = new ticket_controller_1.TicketController();
        this.authMiddleware = new auth_middleware_1.AuthMiddleware();
        this.initiializeRoute();
    }
    initiializeRoute() {
        this.router.get("/", this.ticketController.getTicket);
        this.router.post("/", this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.ticketController.createTicket);
        this.router.get('/purchased', this.authMiddleware.verifyToken, this.ticketController.getPurchasedTickets);
    }
    getRouter() {
        return this.router;
    }
}
exports.TicketRouter = TicketRouter;
