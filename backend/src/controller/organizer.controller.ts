import { Request, Response } from "express";
import prisma from "../prisma";

export class OrganizerController {
    async getUserEvent(req: Request, res: Response) {
        try {
          const userId = req.user?.id;
    
          if (!userId) {
             res.status(400).send({
              message: "User not authenticated",
            });
          }
    
          
          const vouchers = await prisma.event.findMany({
            where: {
              organizerId: userId,
            },
          });
    
          if (vouchers.length === 0) {
             res.status(404).send({
              message: "No vouchers found for this user",
            });
          }
    
          
          res.status(200).send({
            message: "Vouchers retrieved successfully",
            vouchers,
          });
        } catch (err) {
          console.error(err);
          res.status(500).send({ err });
        }
      }
}