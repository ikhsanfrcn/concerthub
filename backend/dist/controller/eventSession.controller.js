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
exports.EventSessionController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class EventSessionController {
    getSessions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { eventId, id } = req.query;
                const sessions = yield prisma_1.default.eventSession.findMany({
                    where: Object.assign(Object.assign({}, (eventId && { eventId: eventId })), (id && { id: id })),
                    include: {
                        event: {
                            select: {
                                title: true,
                                category: true,
                                image: true,
                            },
                        },
                        tickets: true,
                    },
                    orderBy: {
                        date: "desc",
                    },
                });
                res.status(200).json({
                    message: "Sessions fetched successfully",
                    sessions,
                });
            }
            catch (error) {
                console.error("getSessions error:", error);
                res.status(500).json({ message: "Failed to fetch sessions", error });
            }
        });
    }
    createSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { eventId, date, time, location } = req.body;
                if (!eventId || !date || !time || !location) {
                    throw new Error("Missing required fields");
                }
                const event = yield prisma_1.default.event.findUnique({
                    where: { id: eventId },
                });
                if (!event) {
                    res.status(404).json({ message: "Event not found" });
                }
                const session = yield prisma_1.default.eventSession.create({
                    data: {
                        eventId,
                        date,
                        time,
                        location,
                    },
                });
                res.status(201).json({
                    message: "Session created successfully",
                    session,
                });
            }
            catch (error) {
                console.error("createSession error:", error);
                res.status(400).json({ message: (_a = error.message) !== null && _a !== void 0 ? _a : "Failed to create session" });
            }
        });
    }
    deleteSession(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const session = yield prisma_1.default.eventSession.findUnique({ where: { id } });
                if (!session) {
                    res.status(404).json({ message: "Session not found" });
                }
                yield prisma_1.default.eventSession.delete({ where: { id } });
                res.status(200).json({ message: "Session deleted successfully" });
            }
            catch (error) {
                console.error("deleteSession error:", error);
                res.status(500).json({ message: "Failed to delete session", error });
            }
        });
    }
}
exports.EventSessionController = EventSessionController;
