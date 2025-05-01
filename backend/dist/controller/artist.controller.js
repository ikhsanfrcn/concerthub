"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistController = void 0;
const cloudinary_1 = require("../helpers/cloudinary");
const prisma_1 = __importDefault(require("../prisma"));
class ArtistController {
    getArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name } = req.query;
            try {
                const artist = yield prisma_1.default.artist.findMany({
                    where: Object.assign({}, (name && { name: name }))
                });
                res.status(200).json({ message: 'Artist Lists', artist });
            }
            catch (error) {
                console.log(error);
                res.status(500).json(error);
            }
        });
    }
    addArtist(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("Headers received:", req.headers);
            try {
                if (!req.file)
                    throw { message: "image empty" };
                const { name } = req.body;
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "ConcertHubs");
                yield prisma_1.default.artist.create({
                    data: {
                        name,
                        image: secure_url,
                    },
                });
                res.status(200).json({ message: "Artist added", secure_url });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.ArtistController = ArtistController;
