import { Request, Response } from "express";
import prisma from "../prisma";

export class EventController {
  async getEvent(req: Request, res: Response) {
    try {
      // Mengambil data konser dari database (dengan Prisma)
      const concerts = await prisma.event.findMany({
        select: {
        //   image: true,
          title: true,
          location: true,
          date: true,
          time: true,
        },
      });

      if (concerts.length === 0) {
        res.status(404).json({ message: "No upcoming concerts found" });
      }

      res.status(200).json(concerts);
    } catch (error) {
      console.error("Error fetching concerts:", error);
      res.status(500).json({ message: "Server error", error });
    }
  }
}
