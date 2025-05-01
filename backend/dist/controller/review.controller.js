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
exports.ReviewController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ReviewController {
    getReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { eventId } = req.query;
            try {
                const reviews = yield prisma_1.default.review.findMany({
                    where: Object.assign({}, (eventId && { eventId: eventId })),
                    select: {
                        id: true,
                        rating: true,
                        comment: true,
                        createdAt: true,
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                avatar: true,
                            },
                        },
                        event: {
                            select: {
                                title: true,
                                eventSessions: true
                            },
                        },
                    },
                    orderBy: { createdAt: "desc" },
                });
                res.status(200).send({
                    message: "Data Review",
                    reviews,
                });
            }
            catch (err) {
                console.log("getReview error:", err);
                res.status(400).send(err);
            }
        });
    }
    createReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { eventId, rating, purchasedTicketId, comment } = req.body;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                const existingReview = yield prisma_1.default.review.findFirst({
                    where: { userId, eventId },
                });
                if (existingReview) {
                    throw new Error("You have already reviewed this event.");
                }
                if (!eventId || typeof rating !== "number" || !comment) {
                    throw new Error("Missing or invalid fields");
                }
                if (!purchasedTicketId) {
                    res.status(400).send({ message: 'No tickets' });
                }
                yield prisma_1.default.review.create({
                    data: {
                        userId,
                        eventId,
                        purchasedTicketId,
                        rating,
                        comment,
                    },
                });
                res.status(201).send({
                    message: "Review created successfully.",
                });
            }
            catch (err) {
                console.log("createReview error:", err);
                res.status(500).send({ message: "Failed to create review", error: err });
            }
        });
    }
}
exports.ReviewController = ReviewController;
