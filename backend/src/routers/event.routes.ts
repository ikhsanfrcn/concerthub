import { Router } from "express";
import { EventController } from "../controller/event.controller";


export class EventRouter {
  private router: Router;
  private eventController: EventController;

  constructor() {
    this.router = Router();
    this.eventController = new EventController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
this.router.get("/", this.eventController.getEvent);

  }

  getRouter(): Router {
    return this.router;
  }
}
