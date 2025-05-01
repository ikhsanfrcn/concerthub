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
exports.TicketController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class TicketController {
    getTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { eventId, sessionId } = req.query;
                const tickets = yield prisma_1.default.ticket.findMany({
                    where: Object.assign(Object.assign({}, (eventId && { eventId: eventId })), (sessionId && { sessionId: sessionId })),
                    include: {
                        session: {
                            select: {
                                date: true,
                                time: true,
                                location: true,
                            },
                        },
                    },
                });
                res.status(200).json({
                    message: "Ticket list fetched successfully",
                    tickets,
                });
            }
            catch (error) {
                console.error("getTicket error:", error);
                res.status(500).json({ message: "Failed to fetch tickets", error });
            }
        });
    }
    createTicket(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { sessionId, price, category, seatAvailable } = req.body;
                if (!sessionId || !price || !category || !seatAvailable) {
                    throw new Error("Missing required fields");
                }
                const session = yield prisma_1.default.eventSession.findUnique({
                    where: { id: sessionId },
                });
                if (!session)
                    throw res.status(404).json({ message: "Session not found" });
                const priceInt = parseInt(price, 10);
                const seatsInt = parseInt(seatAvailable, 10);
                if (isNaN(priceInt) || isNaN(seatsInt)) {
                    res.status(400).json({ message: "Invalid integer value" });
                }
                const ticket = yield prisma_1.default.ticket.create({
                    data: {
                        sessionId,
                        eventId: session.eventId,
                        price: priceInt,
                        category,
                        seatAvailable: seatsInt,
                    },
                });
                res.status(201).json({
                    message: "Ticket created successfully",
                    ticket,
                });
            }
            catch (error) {
                console.error("createTicket error:", error);
                res
                    .status(400)
                    .json({ message: (_a = error.message) !== null && _a !== void 0 ? _a : "Failed to create ticket" });
            }
        });
    }
    getPurchasedTickets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, transactionId } = req.query;
            try {
                const tickets = yield prisma_1.default.purchasedTicket.findMany({
                    where: Object.assign(Object.assign({}, (userId && { userId: userId })), (transactionId && { transactionId: transactionId })),
                    include: {
                        ticket: {
                            select: {
                                eventId: true,
                                category: true,
                                price: true,
                            },
                        },
                        session: {
                            select: {
                                date: true,
                                time: true,
                                location: true,
                                event: true,
                            },
                        },
                    },
                });
                res.status(200).json({
                    message: "Ticket list fetched successfully",
                    tickets,
                });
            }
            catch (error) {
                console.error("getTicket error:", error);
                res.status(500).json({ message: "Failed to fetch tickets", error });
            }
        });
    }
}
exports.TicketController = TicketController;
