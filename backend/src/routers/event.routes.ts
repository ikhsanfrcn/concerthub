import { Router } from "express";
import { EventController } from "../controller/event.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { uploader } from "../helpers/uploader";

export class EventRouter {
  private router: Router;
  private eventController: EventController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.eventController = new EventController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/", this.eventController.getEvent);
    this.router.post("/create/cloud", uploader('memoryStorage', 'ch-').single('image'),  this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.eventController.createEventCloud);
    this.router.get('/:id', this.eventController.getEventById)
  }

  getRouter(): Router {
    return this.router;
  }
}
