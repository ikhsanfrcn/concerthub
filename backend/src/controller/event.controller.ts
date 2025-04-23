import { Request, Response } from "express";
import prisma from "../prisma";

export class EventController {
  async getEvent(req: Request, res: Response) {
    try {
      const concerts = await prisma.event.findMany({
        select: {
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

  async createEvent(req: Request, res: Response) {
    const { image, title, description, location, date, time, price, seats, category } = req.body;
  
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
}
