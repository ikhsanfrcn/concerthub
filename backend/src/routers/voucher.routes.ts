import { Router } from "express";
import { AuthMiddleware } from "../middleware/auth.middleware"; 
import { VoucherController } from "../controller/voucher.controller";

export class VoucherRouter {
  private router: Router;
  private voucherController: VoucherController;
  private authMiddleware: AuthMiddleware;

  constructor() {
    this.router = Router();
    this.voucherController = new VoucherController();
    this.authMiddleware = new AuthMiddleware();
    this.initializeRoutes();
  }

  private initializeRoutes() {
   
    this.router.get(
      "/vouchers",
      this.authMiddleware.verifyToken, 
      this.voucherController.getUserVoucher
    );

   
    this.router.get(
      "/points",
      this.authMiddleware.verifyToken, 
      this.voucherController.getUserPoints 
    );
  }

  
  getRouter(): Router {
    return this.router;
  }
}
