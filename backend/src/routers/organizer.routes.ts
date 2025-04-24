import { Router } from "express";
import { OrganizerController } from "../controller/organizer.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class OrganizerRouter {
    private router: Router
    private organizerController: OrganizerController
    private authMiddleware: AuthMiddleware

    constructor() {
        this.router = Router()
        this.organizerController = new OrganizerController()
        this.authMiddleware = new AuthMiddleware()
        this.initializeRoutes()
    }

    initializeRoutes() {
        this.router.get('/myevents', this.authMiddleware.verifyToken, this.authMiddleware.verifyRole, this.organizerController.getUserEvent)
    }
    getRouter(): Router {
        return this.router
    }
}