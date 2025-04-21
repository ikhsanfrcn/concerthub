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
      const { eventId, rating, comment } = req.body;
      const userId = req.user?.id as string; 

      if (!eventId || typeof rating !== "number" || !comment) {
        throw { message: "Missing or invalid fields" };
      }

      await prisma.review.create({
        data: {
          userId,
          eventId,
          rating,
          comment,
        },
      });

      res.status(201).send({
        message: "Review created",
      });
    } catch (err) {
      console.log("createReview error:", err);
      res.status(400).send(err);
    }
  }

}
