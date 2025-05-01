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
exports.EventController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const cloudinary_1 = require("../helpers/cloudinary");
const prisma_2 = require("../../prisma/generated/prisma");
class EventController {
    getEvent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, organizerId } = req.query;
            try {
                const concerts = yield prisma_1.default.event.findMany({
                    where: Object.assign(Object.assign({}, (id && { id: id })), (organizerId && { organizerId: organizerId })),
                    include: {
                        eventSessions: {}
                    }
                });
                res.status(200).json(concerts);
            }
            catch (error) {
                console.error("Error fetching concerts:", error);
                res.status(500).json({ message: "Server error", error });
            }
        });
    }
    getCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = Object.keys(prisma_2.EventCategory);
                res.status(200).json(categories);
            }
            catch (error) {
                console.error("Failed to fetch categories:", error);
                res.status(500).json({ message: "Failed to load categories" });
            }
        });
    }
    createEventCloud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            // console.log("Headers received:", req.headers);
            try {
                if (!req.file)
                    throw { message: "image empty" };
                const { title, category, } = req.body;
                const { secure_url } = yield (0, cloudinary_1.cloudinaryUpload)(req.file, "ConcertHub");
                yield prisma_1.default.event.create({
                    data: {
                        organizerId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id,
                        title,
                        category,
                        image: secure_url,
                    },
                });
                res.status(200).json({ message: "Event created", secure_url });
            }
            catch (error) {
                console.log(error);
                res.status(400).send(error);
            }
        });
    }
}
exports.EventController = EventController;
