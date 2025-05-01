import { Request, Response } from "express";
import prisma from "../prisma";

export class VoucherController {

  async getUserVoucher(req: Request, res: Response) {
    try {
      const userId = req.user?.id;

      if (!userId) {
         res.status(400).send({
          message: "User not authenticated",
        });
      }

      
      const vouchers = await prisma.voucher.findMany({
        where: {
          userId: userId,
          used: false,
          expiresAt: {
            gt: new Date()
          }
        },
        include: {
          ReferralUsage: true, 
        },
      });

      res.status(200).send({
        message: "Vouchers retrieved successfully",
        vouchers,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ err });
    }
  }

  
  async getUserPoints(req: Request, res: Response) {
    try {
      const userId = req.user?.id;

      if (!userId) {
         res.status(404).send({
          message: "User not authenticated",
        });
      }

      
      const points = await prisma.point.findMany({
        where: {
          userId: userId,
          used: false,
          expiresAt: {
            gt: new Date()
          }
        },
      });

      res.status(200).send({
        message: "Points retrieved successfully",
        points,
      });
    } catch (err) {
      console.error(err);
      res.status(500).send({ err });
    
    }
  }
}

