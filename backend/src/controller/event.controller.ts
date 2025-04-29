import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../helpers/cloudinary";

export class EventController {
  async getEvent(req: Request, res: Response) {
    const { id, organizerId } = req.query
    try {
      const concerts = await prisma.event.findMany({
        where: {
          ...( id && { id: id as string }),
          ...( organizerId && { organizerId: organizerId as string }),
        },
        include: {
          eventSessions: {}
        }
      });

      if (concerts.length === 0) {
        res.status(400).json({ message: "No upcoming concerts found" });
      }

      res.status(200).json(concerts);
    } catch (error) {
      console.error("Error fetching concerts:", error);
      res.status(500).json({ message: "Server error", error });
    }
  }

  async createEventCloud(req: Request, res: Response) {
    // console.log("Headers received:", req.headers);
    try {
      if (!req.file) throw { message: "image empty" };
      const {
        title,
        price,
        seats,
        category,
      } = req.body;

      const { secure_url } = await cloudinaryUpload(req.file, "ConcertHub");

      const priceInt = parseInt(price, 10);
      const seatsInt = parseInt(seats, 10);

      if (isNaN(priceInt) || isNaN(seatsInt)) {
        res.status(400).json({ message: "Invalid integer value" });
      }

      await prisma.event.create({
        data: {
          organizerId: req.user?.id!,
          title,
          price: priceInt,
          category,
          image: secure_url,
        },
      });

      res.status(200).json({ message: "Event created", secure_url });
    } catch (error) {
      console.log(error);
      res.status(400).send(error);
    }
  }
}
