import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../helpers/cloudinary";
import { EventCategory } from "../../prisma/generated/prisma";

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

      res.status(200).json(concerts);
    } catch (error) {
      console.error("Error fetching concerts:", error);
      res.status(500).json({ message: "Server error", error });
    }
  }

  async getCategories(req: Request, res: Response) {
    try {
      const categories = Object.keys(EventCategory);
      res.status(200).json(categories);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
      res.status(500).json({ message: "Failed to load categories" });
    }
  }

  async createEventCloud(req: Request, res: Response) {
    // console.log("Headers received:", req.headers);
    try {
      if (!req.file) throw { message: "image empty" };
      const {
        title,
        category,
      } = req.body;

      const { secure_url } = await cloudinaryUpload(req.file, "ConcertHubs");


      await prisma.event.create({
        data: {
          organizerId: req.user?.id!,
          title,
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
