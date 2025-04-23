import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { ReviewController } from "../controller/review.controller";


export class ReviewRouter {
  private router: Router;
  private reviewcontroller: ReviewController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.reviewcontroller = new ReviewController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    
this.router.get("/", this.reviewcontroller.getReview);
this.router.post("/", this.authMiddleware.verifyToken, this.reviewcontroller.createReview);

  }

  getRouter(): Router {
    return this.router;
  }
}
