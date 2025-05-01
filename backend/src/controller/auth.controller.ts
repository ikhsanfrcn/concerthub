import { Request, Response } from "express";
import prisma from "../prisma";
import bcrypt, { compare, genSalt } from "bcrypt";
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
        return;
      }

      const salt = await genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const generatedReferralCode = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();

      let ReferredById: string | undefined = undefined;

      if (referralCode) {
        const referrer = await prisma.user.findUnique({
          where: { referralCode },
        });

        if (!referrer) {
          res.status(400).json({ message: "Invalid referral code" });
          return;
        }

        ReferredById = referrer?.id;
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          referralCode: generatedReferralCode,
          ReferredById,
        },
      });

      const payLoad = { id: user.id, role: "CUSTOMER" };
      const token = sign(payLoad, process.env.JWT_SECRET!, {
        expiresIn: "10m",
      });

      const link = `${process.env.BASE_URL_FRONTEND}/verify/customer/${token}`;

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
      const userId = req.user?.id;

      if (!userId) {
        res.status(401).json({ message: "Unauthorized" });
      }

      const user = await prisma.user.update({
        data: { isVerify: true },
        where: { id: userId },
      });

      if (user.ReferredById) {
        const referrer = await prisma.user.findUnique({
          where: { id: user.ReferredById },
        });

        await prisma.point.create({
          data: {
            userId: user.ReferredById,
            amount: 10000,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
          },
        });

        const voucher = await prisma.voucher.create({
          data: {
            userId: user.id,
            voucherType: "REFERRAL",
            discountPercent: 10,
            expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 90),
          },
        });

        await prisma.referralUsage.create({
          data: {
            referrerId: referrer!.id,
            referredId: user.id,
            voucherId: voucher.id,
          },
        });
      }

      res.status(200).json({ message: "Verification Success" });
    } catch (error) {
      console.log("Verify error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) throw { message: "User not found" };
      if (!user.isVerify) throw { message: "Account is not verified" };

      const isValidPass = await compare(password, user.password);
      if (!isValidPass) throw { message: "Invalid password" };

      const payload = { id: user.id, role: user.role };
      const access_token = sign(payload, process.env.JWT_SECRET!, {
        expiresIn: "1h",
      });

      res
        .status(200)
        .json({ message: "Login success", data: user, access_token });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async registerOrganizer(req: Request, res: Response) {
    try {
      // console.log("Headers received:", req.headers);
      const user = await prisma.user.findUnique({
        where: { id: req.user?.id },
      });

      if (!user) {
        res.status(404).json({ message: "User not found" });
      }

      const payLoad = { id: user?.id, email: user?.email };
      const token = sign(payLoad, process.env.JWT_SECRET!, {
        expiresIn: "10m",
      });

      const link = `${process.env.BASE_URL_FRONTEND}/verify/organizer/${token}`;

      const templatePath = path.join(__dirname, "../templates", `verifyOrganizer.hbs`);
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const name = user?.name;
      const html = compiledTemplate({ name, link });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: user?.email,
        subject: "Verification email",
        html: html,
      });

      res.status(201).json({ message: "User registered", user });
    } catch (error) {
      console.error("Register error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  async verifyOrganizer(req: Request, res: Response) {
    try {
      await prisma.user.update({
        data: { role: "ORGANIZER" },
        where: { id: req.user?.id },
      });
      res.status(200).send({ message: "Verification Success!" });
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  }
}
