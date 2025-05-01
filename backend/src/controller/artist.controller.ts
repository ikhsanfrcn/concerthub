import { Request, Response } from "express";
import { cloudinaryUpload } from "../helpers/cloudinary";
import prisma from "../prisma";

export class ArtistController {
  async getArtist(req: Request, res: Response) {
    const { name } = req.query
    try {
      const artist = await prisma.artist.findMany({
        where: {
          ...( name && { name: name as string})
        }
      })
      res.status(200).json({ message: 'Artist Lists', artist })
    } catch (error) {
      console.log(error);
      res.status(500).json(error)
    }
  }

    async addArtist(req: Request, res: Response) {
        // console.log("Headers received:", req.headers);
        try {
          if (!req.file) throw { message: "image empty" };
          const {
            name
          } = req.body;
    
          const { secure_url } = await cloudinaryUpload(req.file, "ConcertHub");
    
          await prisma.artist.create({
            data: {
              name,
              image: secure_url,
            },
          });
    
          res.status(200).json({ message: "Artist added", secure_url });
        } catch (error) {
          console.log(error);
          res.status(400).send(error);
        }
      }
}