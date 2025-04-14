import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt, { genSalt } from "bcrypt";
import { sign } from "jsonwebtoken";
import { transporter } from "../helpers/mailer";
import fs from "fs";
import handlebars from "handlebars";
import path from "path";

export class AuthController {
  async register(req: Request, res: Response) {
    const { name, email, password, referralCode } = req.body;

    try {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser) {
        res.status(400).json({ message: "Email already registered" });
      }

      const salt = await genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt);
      const generatedReferralCode = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();

      let usedReferralById: string | undefined = undefined;

      if (referralCode) {
        const referrer = await prisma.user.findUnique({
          where: { referralCode },
        });
        if (!referrer)
          res.status(400).json({ message: "Invalid referral code" });

        usedReferralById = referrer?.id;

        // Beri point ke yang memberi referral
        await prisma.point.create({
          data: {
            userId: referrer!.id,
            amount: 10000,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 hari
          },
        });
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          //   role: "CUSTOMER",
          referralCode: generatedReferralCode,
          usedReferralById,
        },
      });

      const payLoad = { id: user.id, role: "CUSTOMER" };
      const token = sign(payLoad, process.env.JWT_SECRET!, {
        expiresIn: "10m",
      });

      const link = `${process.env.BASE_URL_FRONTEND}/verify/${token}`;

      const templatePath = path.join(__dirname, "../templates", `verify.hbs`);
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ name, link });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Verification email",
        html: html,
      });

      res.status(201).json({ message: "User registered", user });
    } catch (error) {
      console.error("Register error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
  async verify(req: Request, res: Response) {
    try {
      await prisma.user.update({
        data: { isVerify: true },
        where: { id: req.user?.id },
      });
      res.status(200).json({ message: "Verification Success" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
