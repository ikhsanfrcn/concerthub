// import { Request, Response } from "express";
// import prisma from "../prisma";

// export class OrderController {
//   async createOrder(req: Request, res: Response) {
//     try {
//       const { ticketTypeId, quantity, totalPrice } = req.body;
//       await prisma.$transaction(async (tx) => {
//       await prisma.order.create({
//         data: {
//           ticketTypeId,
//           quantity,
//           totalPrice,
//           status: "PENDING",
//           expiredAt: new Date(Date.now() + 60 * 60 * 1000),
//           userId: req.user?.id!,
//         },
//       });

//       await prisma tx.ticket.update({
//         data: { quota: { decrement: quantity } },
//         where: { id: ticketTypeId },
//       });
//     })
//     } catch (err) {
//       console.log(err);
//       res.status(400).send({ err });
//     }
//   }

