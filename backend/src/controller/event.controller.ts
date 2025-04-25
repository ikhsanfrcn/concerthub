import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../helpers/cloudinary";

export class EventController {
  async getEvent(req: Request, res: Response) {
    try {
      const concerts = await prisma.event.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          location: true,
          date: true,
          time: true,
          price: true,
          seats: true,
          category: true,
          image: true,
        },
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

  async getEventById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const event = await prisma.event.findUnique({ where: { id } });
      res.status(200).json(event);
    } catch (error) {
      res.status(404).json({ message: "Event not found" });
    }
  }

  async createEvent(req: Request, res: Response) {
    const {
      image,
      title,
      description,
      location,
      date,
      time,
      price,
      seats,
      category,
    } = req.body;

    if (!image || !title || !location || !date || !time) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const newEvent = await prisma.event.create({
        data: {
          organizerId: req.user?.id!,
          title,
          description,
          location,
          date,
          time,
          price,
          seats,
          category,
          image,
        },
      });

      res.status(201).json(newEvent);
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ message: "Server error", error });
    }
  }

  async createEventCloud(req: Request, res: Response) {
    // console.log("Headers received:", req.headers);
    try {
      if (!req.file) throw { message: "image empty" };
      const {
        title,
        description,
        location,
        date,
        time,
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
          description,
          location,
          date,
          time,
          price: priceInt,
          seats: seatsInt,
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
