import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { ReviewController } from "../controller/review.controller";


export class ReviewRouter {
  private router: Router;
  private controller: ReviewController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.controller = new ReviewController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
this.router.get("/", this.controller.getReview);
this.router.post("/", this.authMiddleware.verifyToken, this.controller.createReview);

  }

  getRouter(): Router {
    return this.router;
  }
}
