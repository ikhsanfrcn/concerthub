import { Request, Response, Router } from "express";
import { AuthController } from "../controller/auth.controller";

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.initializeRoute();
  }

  private initializeRoute() {
    this.router.post("/register", this.authController.registerUser);
    // this.router.post("/login", this.authController.login);
  }

  getRouter(): Router {
    return this.router;
  }
}
