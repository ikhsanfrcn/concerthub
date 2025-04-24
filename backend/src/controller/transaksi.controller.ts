import { Request, Response } from "express";
import prisma from "../prisma";
import { v4 as uuidv4 } from "uuid";

export class TransactionController {

  async getTransactions(req: Request, res: Response) {
    try {
      const transactions = await prisma.transaction.findMany({
        where: {
          userId: req.user?.id,  
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
      const { eventId, ticketId, quantity, totalPrice, usedPoints, discount } = req.body;
      const userId = req.user?.id;
      const referenceId = `txn-${uuidv4()}`

      if (!eventId || !quantity || !totalPrice || !userId) {
        throw { message: "EventId, quantity, totalPrice, dan userId harus diisi" };
      }

      const newTransaction = await prisma.transaction.create({
        data: {
          userId,
          eventId,
          ticketId,
          quantity,
          totalPrice,
          usedPoints: usedPoints || 0,  // Defaultkan jika tidak ada
          discount: discount || 0,      // Defaultkan jika tidak ada
          status: "PENDING",
          referenceId: referenceId,
          expireAt: new Date(Date.now() + 60 * 60 * 1000)
        },
      });

      res.status(201).send({
        message: "Transaksi berhasil dibuat",
        transaction: newTransaction,
      });
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
      const { transactionId } = req.params;
      const { status } = req.body; // PENDING / PAID / EXPIRED / CANCEL
  
      const transaction = await prisma.transaction.findUnique({
        where: { id: transactionId },
        include: {
          user: true,
          ticket: {
            include: {
              session: true,
            },
          },
        },
      });
  
      if (!transaction) {
        throw res.status(404).json({ message: "Transaction not found" });
      }
  
      // Update status
      const updatedTransaction = await prisma.transaction.update({
        where: { id: transactionId },
        data: { status },
      });
  
      // If status PAID, create PurchasedTicket(s)
      if (status === "PAID") {
        const ticketsToCreate = Array.from({ length: transaction.quantity }, () => ({
          transactionId: transaction.id,
          ticketId: transaction.ticketId,
          sessionId: transaction.ticket.sessionId,
          userId: transaction.userId,
        }));
  
        await prisma.purchasedTicket.createMany({
          data: ticketsToCreate,
        });
      }
  
      res.status(200).json({
        message: "Transaction status updated successfully",
        transaction: updatedTransaction,
      });
    } catch (err) {
      console.error("updateTransactionStatus error:", err);
      res.status(500).json({ message: "Failed to update transaction", error: err });
    }
  }
}
