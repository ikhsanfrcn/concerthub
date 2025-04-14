import { Request, Response } from "express";
import bcrypt, { genSalt, hash } from "bcrypt";
import jwt, { sign } from "jsonwebtoken";
import prisma from "../prisma";
import path from "path";
import fs from "fs";
import handlebars from "handlebars";
import { transporter } from "../helpers/mailer";

const JWT_SECRET = process.env.JWT_SECRET || "secret";

export class AuthController {
  async registerUser(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      const salt = await genSalt(10);

      const existingUser = await prisma.user.findUnique({
        where: { email },
      });

      if (!existingUser) {
        res.status(400).json({ message: "Email already used" });
      }

      const hashedPass = await hash(password, salt);
      const myReferralCode = Math.random()
        .toString(36)
        .substring(2, 10)
        .toLocaleUpperCase();

      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPass,
          name,
          referralCode: myReferralCode,
        },
      });

      const payLoad = { id: user.id, role: "user" };
      const token = sign(payLoad, process.env.SECRET_KEY!, {
        expiresIn: "10m",
      });

      const link = `${process.env.BASE_URL_FRONTEND}/verify${token}`;

      const templatePath = path.join(__dirname, "../templates", `verify.hbs`);
      const templateSource = fs.readFileSync(templatePath, "utf-8");
      const compiledTemplate = handlebars.compile(templateSource);
      const html = compiledTemplate({ email, link });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: "Verification email",
        html: html,
      });

      res.status(201).json({
        message: "User registered",
        user: {
          id: user.id,
          email: user.email,
          // role: user.role,
          // referralCode: user.referralCode,
        },
      });
    } catch (error) {
      res.status(400).json({ message: "Err" });
    }
  }

  async register2(req: Request, res: Response) {
    try {
      const { name, email, password, role, referralCode } = req.body;

      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (existingUser)
        return res.status(400).json({ message: "Email already used" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const myReferralCode = Math.random()
        .toString(36)
        .substring(2, 10)
        .toUpperCase();

      let referredById = undefined;
      if (referralCode) {
        const referredUser = await prisma.user.findUnique({
          where: { referralCode },
        });
        if (!referredUser)
          return res.status(400).json({ message: "Invalid referral code" });
        referredById = referredUser.id;

        await prisma.referralPoint.create({
          data: {
            userId: referredUser.id,
            points: 10000,
            expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
          },
        });
      }

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role,
          referralCode: myReferralCode,
          referredById,
          points: referralCode
            ? {
                create: {
                  amount: 10000,
                  expiresAt: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
                },
              }
            : undefined,
        },
      });

      return res.status(201).json({
        message: "User registered",
        user: {
          id: user.id,
          email: user.email,
          role: user.role,
          referralCode: user.referralCode,
        },
      });
    } catch (error) {
      console.error("Register error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({ where: { email } });
      if (!user)
        return res.status(400).json({ message: "Invalid email or password" });

      const valid = await bcrypt.compare(password, user.password);
      if (!valid)
        return res.status(400).json({ message: "Invalid email or password" });

      const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
        expiresIn: "7d",
      });

      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          role: user.role,
          email: user.email,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  async test(req: Request, res: Response) {
    try {
      res.status(200).json({ message: "dor" });
      console.log("dor");
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "dor error" });
    }
  }
}
