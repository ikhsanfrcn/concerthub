import { Request } from "express";
import multer from "multer";
import path from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (error: Error | null, name: string) => void;

export const uploader = (
  type: "memoryStorage" | "diskStorage",
  filePrefix: string,
  folderName?: string
) => {
  const defaultDir = path.join(__dirname, "../../public");

  const storage =
    type == "memoryStorage"
      ? multer.memoryStorage()
      : multer.diskStorage({
          destination: (
            req: Request,
            file: Express.Multer.File,
            cb: DestinationCallback
          ) => {
            const destination = folderName
              ? defaultDir + folderName
              : defaultDir;

            cb(null, destination);
          },

          filename: (
            req: Request,
            file: Express.Multer.File,
            cb: FileNameCallback
          ) => {
            const originalName = file.originalname.split(".");
            const fileExtension = originalName[originalName.length - 1];
            const newfFileName = filePrefix + Date.now() + "." + fileExtension;
            cb(null, newfFileName);
          },
        });
  return multer({ storage });
};
