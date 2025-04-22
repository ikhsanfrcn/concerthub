import { Request, Response } from "express";
import prisma from "../prisma";

export class UserController {
  async getProfile(req: Request, res: Response) {
    try {
      const userId = req.user?.id;
      const user = await prisma.user.findUnique({
        where: { id: userId },
        select: {
          id: true,
          name: true,
          lastName: true,
          email: true,
          zipCode: true,
          state: true,
          city: true,
          street: true,
          houseNumber: true,
          dob: true,
          phoneNumber: true,
          referralCode: true,
        },
      });
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "Profile", user});
    } catch (error) {
      res.status(500).json({ message: error });
      console.log(error);
    }
  }

  async updateProfile(req: Request, res: Response) {
    const userId = req.user?.id;
    const {
      name,
      lastName,
      email,
      zipCode,
      state,
      city,
      street,
      houseNumber,
      phoneNumber,
      dob,
      regionNumber,
    } = req.body;
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) throw { message: "User not found" };

      const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
          name,
          lastName,
          email,
          zipCode,
          state,
          city,
          street,
          houseNumber,
          dob,
          phoneNumber,
          regionNumber,
        },
      });

      res.status(201).json({
        message: "Profile updated successfully",
        user: updatedUser,
      });
    } catch (error) {
      res.status(500).json({ message: error });
      console.log(error);
    }
  }
}
