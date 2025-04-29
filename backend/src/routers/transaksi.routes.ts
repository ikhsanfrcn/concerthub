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
    this.router.get(
      "/",
      this.auth.verifyToken,
      this.transactionController.getTransactions
    );

    this.router.post(
      "/",
      this.auth.verifyToken,
      this.transactionController.createTransaction
    );

    this.router.post("/status", this.transactionController.updateTransaction);
    this.router.get(
      "/pending",
      this.transactionController.getUserPendingTransactions
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
