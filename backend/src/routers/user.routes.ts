import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";

export class UserRouter {
  private router: Router;
  private userController: UserController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.userController = new UserController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get("/profile", this.authMiddleware.verifyToken, this.userController.getProfile);
    this.router.patch('/profile-update', this.authMiddleware.verifyToken, this.userController.updateProfile)

  }

  getRouter(): Router {
    return this.router;
  }
}
