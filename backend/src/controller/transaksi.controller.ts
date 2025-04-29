import { Request, Response } from "express";
import prisma from "../prisma";
import { v4 as uuidv4 } from "uuid";
import xenditClient from "../helpers/xendit";
import { CreateInvoiceRequest } from "xendit-node/invoice/models";
import { statusTransaction } from "../../prisma/generated/prisma";

export class TransactionController {
  async getTransactions(req: Request, res: Response) {
    const { userId, id } = req.query;
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          ...(userId && { userId: userId as string }),
          ...(id && { id: id as string }),
        },
        include: {
          event: true,
          ticket: true,
        },
        orderBy: { createdAt: "desc" },
      });

      res.status(200).send({
        message: "Data transaksi berhasil diambil",
        transactions,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        message: "Terjadi kesalahan",
        error: err,
      });
    }
  }

  async getUserPendingTransactions(req: Request, res: Response) {
    try {
      const { userId } = req.query;

      if (!userId || typeof userId !== "string") {
        throw res.status(400).json({ message: "User ID is required" });
      }

      const transactions = await prisma.transaction.findMany({
        where: {
          userId: userId,
          status: "PENDING"
        },
        include: {
          event: true,
          ticket: true,
        },
        orderBy: { createdAt: "desc" },
      });

      res.status(200).send({
        message: "Data transaksi berhasil diambil",
        transactions,
      });
    } catch (err) {
      console.log(err);
      res.status(400).send({
        message: "Terjadi kesalahan",
        error: err,
      });
    }
  }

  // Membuat transaksi baru
  async createTransaction(req: Request, res: Response) {
    try {
      const { eventId, ticketId, quantity, totalPrice, usedPoints, discount, voucherId, pointId } = req.body;
      const referenceId = `txn-${uuidv4()}`;
      const userId = req.user?.id;

      if (!eventId || !quantity || !totalPrice || !userId) {
        res.status(400).send({
          message: "EventId, quantity, totalPrice, dan userId harus diisi",
        });
      } else {
        await prisma.$transaction(async (txn) => {
          const transaction = await txn.transaction.create({
            data: {
              userId,
              eventId,
              ticketId,
              quantity,
              totalPrice,
              usedPoints: usedPoints || 0,
              discount: discount || 0,
              voucherId: voucherId || null,
              pointId: pointId || null,
              status: "PENDING",
              referenceId: referenceId,
              expireAt: new Date(Date.now() + 60 * 60 * 1000), // expire 1 jam
            },
          });

          await txn.ticket.update({
            data: { seatAvailable: { decrement: quantity } },
            where: { id: ticketId },
          });

          const data: CreateInvoiceRequest = {
            amount: totalPrice,
            invoiceDuration: "3600",
            externalId: transaction.id,
            description: `Invoice order id ${transaction.id}`,
            currency: "IDR",
            reminderTime: 1,
          };

          const invoice = await xenditClient.Invoice.createInvoice({ data });

          await txn.transaction.update({
            data: { invoiceUrl: invoice.invoiceUrl },
            where: { id: transaction.id },
          });

          res.status(201).send({ message: "Transaksi berhasil dibuat", invoice });
        });
      }
    } catch (err) {
      console.log(err);
      res.status(400).send({
        message: "Terjadi kesalahan saat membuat transaksi",
        error: err,
      });
    }
  }

  async updateTransaction(req: Request, res: Response) {
    try {
      const { status, external_id } = req.body;
      console.log(req.body);

      if (!status || !external_id) {
        res.status(400).send({ message: "Status dan external_id wajib diisi" });
      } else {
        if (status === statusTransaction.PAID) {
          await prisma.transaction.update({
            data: { status: "PAID" },
            where: { id: external_id },
          });

          const transaction = await prisma.transaction.findUnique({
            where: { id: external_id },
            include: {
              ticket: {
                include: {
                  session: true,
                },
              },
            },
          });

          if (transaction) {
            if (transaction.voucherId) {
              await prisma.voucher.update({
                where: { id: transaction.voucherId },
                data: { used: true },
              });
            }

            if (transaction.pointId) {
              await prisma.point.update({
                where: { id: transaction.pointId },
                data: { used: true },
              });
            }

            const ticketsToCreate = Array.from(
              { length: transaction.quantity },
              () => ({
                transactionId: transaction.id,
                ticketId: transaction.ticketId,
                sessionId: transaction.ticket.sessionId,
                userId: transaction.userId,
              })
            );

            await prisma.purchasedTicket.createMany({
              data: ticketsToCreate,
            });
          } else {
            res.status(404).json({ message: "Transaction not found" });
          }
        } else if (status === statusTransaction.EXPIRED) {
          await prisma.$transaction(async (tnx) => {
            await tnx.transaction.update({
              data: { status: "EXPIRED" },
              where: { id: external_id },
            });

            const transaction = await tnx.transaction.findUnique({
              where: { id: external_id },
            });

            if (transaction) {
              await tnx.ticket.update({
                data: { seatAvailable: { increment: transaction.quantity } },
                where: { id: transaction.ticketId },
              });
            }
          });
        }

        res.status(200).json({ message: "Success" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  }

}
