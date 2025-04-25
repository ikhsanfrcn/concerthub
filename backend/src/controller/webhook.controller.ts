import { Request, Response } from "express";
import prisma from "../prisma";


export class WebhookController {
  async handleXenditWebhook(req: Request, res: Response) {
    try {
      const event = req.body;
      const signature = req.headers["x-callback-token"] as string;

      if (signature !== process.env.XENDIT_CALLBACK_TOKEN) {
        res.status(400).json({ message: "Invalid signature" });
        return;
      }

      if (event.event === "payment.succeeded") {
        const { amount, reference_id } = event.data;

        const transaction = await prisma.transaction.findUnique({
          where: { referenceId: reference_id },
          include: {
            ticket: {
              include: {
                session: true, 
              },
            },
          },
        });

        if (transaction) {
          if (transaction.status === "PAID") {
            res.status(200).json({ message: "Transaction already paid" });
          } else {
            await prisma.transaction.update({
              where: { id: transaction.id },
              data: {
                status: "PAID",
                totalPrice: amount, 
              },
            });

            const ticketsToCreate = Array.from({ length: transaction.quantity }, () => ({
              transactionId: transaction.id,
              ticketId: transaction.ticketId,
              sessionId: transaction.ticket.sessionId, 
              userId: transaction.userId,
            }));

            await prisma.purchasedTicket.createMany({
              data: ticketsToCreate,
            });

            res.status(200).json({ message: "Transaction updated and tickets created" });
          }
        } else {
          res.status(404).json({ message: "Transaction not found" });
        }
      } else {
        res.status(200).json({ message: "Event ignored" });
      }
    } catch (err) {
      console.error("Webhook error:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
