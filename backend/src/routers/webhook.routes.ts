import { Router } from "express";
import { WebhookController } from "../controller/webhook.controller";

export class WebhookRouter {
  private router: Router;
  private webhookController: WebhookController;

  constructor() {
    this.router = Router();
    this.webhookController = new WebhookController();
    this.initializeRouter();
  }

  private initializeRouter() {
    this.router.post("/", this.webhookController.handleXenditWebhook)
  }

  getRouter(): Router {
    return this.router;
  }
}
