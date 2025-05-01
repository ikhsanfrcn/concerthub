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
    
          
          const events = await prisma.event.findMany({
            where: {
              organizerId: userId,
            },
          });

          res.status(200).send({
            message: "Event retrieved successfully",
            events,
          });
        } catch (err) {
          console.error(err);
          res.status(500).send({ err });
        }
      }
}