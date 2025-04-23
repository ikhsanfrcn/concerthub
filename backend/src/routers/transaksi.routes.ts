import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware";
import { TransactionController } from "../controller/transaksi.controller";

export class TransactionRouter {
  private router: Router;
  private transactionController: TransactionController;
  private auth: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.transactionController = new TransactionController();
    this.auth = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(
      "/",
      this.auth.verifyToken,
      this.transactionController.createTransaction
    );

    this.router.get(
      "/",
      this.auth.verifyToken,
      this.transactionController.createTransaction
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
