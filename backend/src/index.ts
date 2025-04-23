import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AuthRouter } from "./routers/auth.routes";
import { ReviewRouter } from "./routers/review.routes";
import { TransactionRouter } from "./routers/transaksi.routes";
import { VoucherRouter } from "./routers/voucher.routes";


const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome!" });
});

const authRouter = new AuthRouter();
app.use('/api/auth', authRouter.getRouter())

const reviewRoute = new ReviewRouter();
app.use('/api/reviews', reviewRoute.getRouter())

const transactionRoute = new TransactionRouter();
app.use('/api/transactions', transactionRoute.getRouter())

const voucherRoute = new VoucherRouter();
app.use('/api/voucher', voucherRoute.getRouter())

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/api`);
});
