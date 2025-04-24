import { Request, Response } from "express";
import prisma from "../prisma";

export class TicketController {
  async getTicket(req: Request, res: Response) {
    try {
      const { eventId, sessionId } = req.query;

      const tickets = await prisma.ticket.findMany({
        where: {
          ...(eventId && { eventId: eventId as string }),
          ...(sessionId && { sessionId: sessionId as string }),
        },
        include: {
          session: {
            select: {
              date: true,
              time: true,
              location: true,
            },
          },
        },
      });

      res.status(200).json({
        message: "Ticket list fetched successfully",
        tickets,
      });
    } catch (error) {
      console.error("getTicket error:", error);
      res.status(500).json({ message: "Failed to fetch tickets", error });
    }
  }

  async createTicket(req: Request, res: Response) {
    try {
      const { sessionId, name, description, price, category, seatAvailable } = req.body;

      if (!sessionId || !name || !price || !category || !seatAvailable) {
        throw new Error("Missing required fields");
      }

      const session = await prisma.eventSession.findUnique({
        where: { id: sessionId },
      });

      if (!session) throw res.status(404).json({ message: "Session not found" });

      const ticket = await prisma.ticket.create({
        data: {
          sessionId,
          eventId: session.eventId,
          name,
          description,
          price,
          category,
          seatAvailable,
        },
      });

      res.status(201).json({
        message: "Ticket created successfully",
        ticket,
      });
    } catch (error: any) {
      console.error("createTicket error:", error);
      res
        .status(400)
        .json({ message: error.message ?? "Failed to create ticket" });
    }
  }
}
