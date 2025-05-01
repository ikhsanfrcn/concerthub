import { Router } from "express";
import { TicketController } from "../controller/ticket.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class TicketRouter {
  private router: Router;
  private ticketController: TicketController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.ticketController = new TicketController();
    this.authMiddleware = new AuthMiddleware();
    this.initiializeRoute();
  }

  private initiializeRoute() {
    this.router.get("/", this.ticketController.getTicket);
    this.router.post(
      "/",
      this.authMiddleware.verifyToken,
      this.authMiddleware.verifyRole,
      this.ticketController.createTicket
    );
    this.router.get('/purchased', this.authMiddleware.verifyToken, this.ticketController.getPurchasedTickets)

  }

  getRouter(): Router {
    return this.router;
  }
}
