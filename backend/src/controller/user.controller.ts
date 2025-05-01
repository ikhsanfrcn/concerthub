import { Request, Response } from "express";
import prisma from "../prisma";
import { cloudinaryUpload } from "../helpers/cloudinary";

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
          avatar: true,
        },
      });
      if (!user) {
        res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "Profile", user });
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
      avatar,
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
          avatar,
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

  async updateAvatar(req: Request, res: Response) {
    try {
      if (!req.file) throw { message: "No image uploaded." };
  
      const { secure_url } = await cloudinaryUpload(req.file, "ConcertHub");
  
      if (!req.user?.id) {
        throw res.status(401).json({ message: "Unauthorized" });
      }
  
      await prisma.user.update({
        where: { id: req.user.id },
        data: {
          avatar: secure_url,
        },
      });
  
      res.status(200).json({ message: "Profile photo updated successfully", avatar: secure_url });
    } catch (error) {
      console.error("Update profile error:", error);
      res.status(400).json({
        message: "Failed to update profile photo",
        error
      });
    }
  }
  
}
