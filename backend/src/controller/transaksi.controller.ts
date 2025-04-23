import { Request, Response } from "express";
import prisma from "../prisma";

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
      const userId = req.user?.id;  // Mengambil userId dari request (pastikan ada middleware auth)

      if (!eventId || !quantity || !totalPrice || !userId) {
        throw { message: "EventId, quantity, totalPrice, dan userId harus diisi" };
      }

      const newTransaction = await prisma.transaction.create({
        data: {
          eventId,
          quantity,
          totalPrice,
          usedPoints: usedPoints || 0,  // Defaultkan jika tidak ada
          discount: discount || 0,      // Defaultkan jika tidak ada
          userId,
          status: "PENDING",
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

  
}
