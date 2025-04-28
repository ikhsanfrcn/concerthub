import express, { Application, Request, Response } from "express";
import cors from "cors";
import { AuthRouter } from "./routers/auth.routes";
import { ReviewRouter } from "./routers/review.routes";
import { TransactionRouter } from "./routers/transaksi.routes";
import { VoucherRouter } from "./routers/voucher.routes";
import { UserRouter } from "./routers/user.routes";
import { EventRouter } from "./routers/event.routes";
import { OrganizerRouter } from "./routers/organizer.routes";
import { TicketRouter } from "./routers/ticket.routes";
import { EventSessionRouter } from "./routers/eventSession.routes";
import { WebhookRouter } from "./routers/webhook.routes";
import { ArtistRouter } from "./routers/artist.routes";


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

const reviewRouter = new ReviewRouter();
app.use('/api/reviews', reviewRouter.getRouter())

const userRouter = new UserRouter();
app.use('/api/users', userRouter.getRouter())

const eventRouter = new EventRouter();
app.use('/api/events', eventRouter.getRouter())

const organizerRouter = new OrganizerRouter()
app.use('/api/organizer', organizerRouter.getRouter())

const ticketRouter = new TicketRouter()
app.use('/api/tickets', ticketRouter.getRouter())

const eventSessionRouter = new EventSessionRouter()
app.use('/api/event-session', eventSessionRouter.getRouter())

const webhookRouter = new WebhookRouter()
app.use('/api/xendit', webhookRouter.getRouter())

const artistRouter = new ArtistRouter();
app.use('/api/artists', artistRouter.getRouter())


app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/api`);
});
