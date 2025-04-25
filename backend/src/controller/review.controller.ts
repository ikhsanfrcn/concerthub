import { Request, Response } from "express";
import prisma from "../prisma";

export class ReviewController {
  async getReview(req: Request, res: Response) {
    try {
      const reviews = await prisma.review.findMany({
        select: {
          id: true,
          rating: true,
          comment: true,
          createdAt: true,
          user: {
            select: {
              name: true,
              email: true,
              
            },
          },
          event: {
            select: {
              title: true,
              date: true,
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
     
      // const purchasedTicket = await prisma.purchasedTicket.findFirst({
      //   where: {
      //     userId,
      //     ticket: {
      //       session: {
      //         id: eventId ,
      //       },
      //     },
      //   },
      // });
      
      // if (!purchasedTicket) {
      //   throw new Error("You must purchase a ticket before writing a review.");
      // }
  
      const existingReview = await prisma.review.findFirst({
        where: { userId, eventId },
      });
  
      if (existingReview) {
        throw new Error("You have already reviewed this event.");
      }
      if (!eventId || typeof rating !== "number" || !comment) {
        throw new Error("Missing or invalid fields");
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
      res.status(400).send({ message: "Failed to create review", error: err });
    }
  }

}
