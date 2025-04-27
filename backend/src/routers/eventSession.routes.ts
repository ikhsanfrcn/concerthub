import { Router } from "express";
import { EventSessionController } from "../controller/eventSession.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class EventSessionRouter {
  private router: Router;
  private controller: EventSessionController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.controller = new EventSessionController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.get("/", this.controller.getSessions);
    this.router.post('/', this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.controller.createSession)
    this.router.delete('/:id', this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.controller.deleteSession)
    this.router.get('/:id', this.controller.getSessionsByEventId)

  }

  getRouter(): Router {
    return this.router;
  }
}
