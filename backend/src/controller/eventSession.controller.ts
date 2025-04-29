import { Request, Response } from "express";
import prisma from "../prisma";

export class EventSessionController {
  async getSessions(req: Request, res: Response) {
    try {
      const { eventId, id } = req.query;

      const sessions = await prisma.eventSession.findMany({
        where: {
          ...(eventId && { eventId: eventId as string }),
          ...(id && { id: id as string }),
        },
        include: {
          event: {
            select: {
              title: true,
              category: true,
              image: true,
            },
          },
          tickets: true,
        },
        orderBy: {
          date: "desc",
        },
      });

      res.status(200).json({
        message: "Sessions fetched successfully",
        sessions,
      });
    } catch (error) {
      console.error("getSessions error:", error);
      res.status(500).json({ message: "Failed to fetch sessions", error });
    }
  }
  

  async createSession(req: Request, res: Response) {
    try {
      const { eventId, date, time, location } = req.body;

      if (!eventId || !date || !time || !location) {
        throw new Error("Missing required fields");
      }

      const event = await prisma.event.findUnique({
        where: { id: eventId },
      });

      if (!event) {
         res.status(404).json({ message: "Event not found" });
      }

      const session = await prisma.eventSession.create({
        data: {
          eventId,
          date,
          time,
          location,
        },
      });

      res.status(201).json({
        message: "Session created successfully",
        session,
      });
    } catch (error: any) {
      console.error("createSession error:", error);
      res.status(400).json({ message: error.message ?? "Failed to create session" });
    }
  }

  async deleteSession(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const session = await prisma.eventSession.findUnique({ where: { id } });
      if (!session) {
         res.status(404).json({ message: "Session not found" });
      }

      await prisma.eventSession.delete({ where: { id } });

      res.status(200).json({ message: "Session deleted successfully" });
    } catch (error) {
      console.error("deleteSession error:", error);
      res.status(500).json({ message: "Failed to delete session", error });
    }
  }
}
