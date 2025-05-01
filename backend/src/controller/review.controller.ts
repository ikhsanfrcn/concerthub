import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewController {
    async getReview(req: Request, res: Response) {
      const { eventId } = req.query
      try {
        const reviews = await prisma.review.findMany({
          where: {
            ...(eventId && { eventId: eventId as string }),
          },
          select: {
            id: true,
            rating: true,
            comment: true,
            createdAt: true,
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                avatar: true,
              },
            },
            event: {
              select: {
                title: true,
                eventSessions: true
              },
            },
          },
          orderBy: { createdAt: "desc" },
        });
  
        res.status(200).send({
          message: "Data Review",
          reviews,
        });
      } catch (err) {
        console.log("getReview error:", err);
        res.status(400).send(err);
      }
    }

  async createReview(req: Request, res: Response) {
    try {
      const { eventId, rating, purchasedTicketId, comment } = req.body;
      const userId = req.user?.id as string; 
  
      const existingReview = await prisma.review.findFirst({
        where: { userId, eventId },
      });
  
      if (existingReview) {
        throw new Error("You have already reviewed this event.");
      }
      if (!eventId || typeof rating !== "number" || !comment) {
        throw new Error("Missing or invalid fields");
      }      
      if (!purchasedTicketId) {
        res.status(400).send({ message:'No tickets'})
      }

      await prisma.review.create({
        data: {
          userId,
          eventId,
          purchasedTicketId,
          rating,
          comment,
        },
      });

      res.status(201).send({
        message: "Review created successfully.",
      });
    } catch (err) {
      console.log("createReview error:", err);
      res.status(500).send({ message: "Failed to create review", error: err });
    }
  }

}
