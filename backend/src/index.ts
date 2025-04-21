import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AuthRouter } from "./routers/auth.routes";
import { ReviewRouter } from "./routers/review.routes";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome!" });
});

const authRouter = new AuthRouter();
app.use('/api/auth', authRouter.getRouter())

const authRoute = new ReviewRouter();
app.use('/api/reviews', authRoute.getRouter())


app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/api`);
});
