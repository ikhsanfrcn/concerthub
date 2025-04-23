import { Router } from "express";
import { AuthController } from "../controller/auth.controller";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { validateRegister } from "../middleware/validation";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.post("/register", validateRegister, this.authController.register);
    this.router.patch("/verify", this.authMiddleware.verifyToken, this.authController.verify);
    this.router.post("/login", this.authController.login);
    this.router.post('/register/organizer',this.authMiddleware.verifyToken, this.authController.registerOrganizer);
    this.router.patch("/verify/organizer", this.authMiddleware.verifyToken, this.authController.verifyOrganizer);
  }

  getRouter(): Router {
    return this.router;
  }
}
