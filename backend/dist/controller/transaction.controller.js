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
exports.TransactionController = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const xendit_1 = __importDefault(require("../helpers/xendit"));
const prisma_2 = require("../../prisma/generated/prisma");
class TransactionController {
    getTransactions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId, id } = req.query;
            try {
                const transactions = yield prisma_1.default.transaction.findMany({
                    where: Object.assign(Object.assign({}, (userId && { userId: userId })), (id && { id: id })),
                    include: {
                        event: true,
                        ticket: true,
                    },
                    orderBy: { createdAt: "desc" },
                });
                res.status(200).send({
                    message: "Data transaksi berhasil diambil",
                    transactions,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send({
                    message: "Terjadi kesalahan",
                    error: err,
                });
            }
        });
    }
    getUserPendingTransactions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userId } = req.query;
                if (!userId || typeof userId !== "string") {
                    throw res.status(400).json({ message: "User ID is required" });
                }
                const transactions = yield prisma_1.default.transaction.findMany({
                    where: {
                        userId: userId,
                        status: "PENDING",
                    },
                    include: {
                        event: true,
                        ticket: true,
                    },
                    orderBy: { createdAt: "desc" },
                });
                res.status(200).send({
                    message: "Data transaksi berhasil diambil",
                    transactions,
                });
            }
            catch (err) {
                console.log(err);
                res.status(400).send({
                    message: "Terjadi kesalahan",
                    error: err,
                });
            }
        });
    }
    createTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const { eventId, ticketId, quantity, totalPrice, voucherId, pointId } = req.body;
                const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.id;
                if (!eventId || !quantity || !totalPrice || !userId) {
                    res.status(400).send({
                        message: "EventId, quantity, totalPrice, dan userId harus diisi",
                    });
                }
                else {
                    yield prisma_1.default.$transaction((txn) => __awaiter(this, void 0, void 0, function* () {
                        const transaction = yield txn.transaction.create({
                            data: {
                                userId,
                                eventId,
                                ticketId,
                                quantity,
                                totalPrice,
                                voucherId,
                                pointId,
                                status: "PENDING",
                                expireAt: new Date(Date.now() + 60 * 60 * 1000), // expire 1 jam
                            },
                        });
                        yield txn.ticket.update({
                            data: { seatAvailable: { decrement: quantity } },
                            where: { id: ticketId },
                        });
                        if (voucherId) {
                            yield txn.voucher.update({
                                data: { used: true },
                                where: { id: voucherId },
                            });
                        }
                        if (pointId) {
                            yield txn.point.update({
                                data: { used: true },
                                where: { id: pointId },
                            });
                        }
                        const data = {
                            amount: totalPrice,
                            invoiceDuration: "3600",
                            externalId: transaction.id,
                            description: `Invoice order id ${transaction.id}`,
                            currency: "IDR",
                            reminderTime: 1,
                        };
                        const invoice = yield xendit_1.default.Invoice.createInvoice({ data });
                        yield txn.transaction.update({
                            data: { invoiceUrl: invoice.invoiceUrl },
                            where: { id: transaction.id },
                        });
                        res
                            .status(201)
                            .send({ message: "Transaksi berhasil dibuat", invoice });
                    }));
                }
            }
            catch (err) {
                console.log(err);
                res.status(400).send({
                    message: "Terjadi kesalahan saat membuat transaksi",
                    error: err,
                });
            }
        });
    }
    updateTransaction(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, external_id } = req.body;
                if (!status || !external_id) {
                    res.status(400).send({ message: "Status dan external_id wajib diisi" });
                }
                else {
                    if (status === prisma_2.statusTransaction.PAID) {
                        yield prisma_1.default.transaction.update({
                            data: { status: "PAID" },
                            where: { id: external_id },
                        });
                        const transaction = yield prisma_1.default.transaction.findUnique({
                            where: { id: external_id },
                            include: {
                                ticket: {
                                    include: {
                                        session: true,
                                    },
                                },
                                event: true,
                                voucher: true,
                                point: true,
                            },
                        });
                        if (transaction) {
                            yield prisma_1.default.event.update({
                                data: { attendees: { increment: transaction.quantity } },
                                where: { id: transaction.eventId },
                            });
                            yield prisma_1.default.event.update({
                                data: { totalIncome: { increment: transaction.totalPrice } },
                                where: { id: transaction.eventId },
                            });
                            const ticketsToCreate = Array.from({ length: transaction.quantity }, () => ({
                                transactionId: transaction.id,
                                ticketId: transaction.ticketId,
                                sessionId: transaction.ticket.sessionId,
                                userId: transaction.userId,
                            }));
                            yield prisma_1.default.purchasedTicket.createMany({
                                data: ticketsToCreate,
                            });
                        }
                        else {
                            res.status(404).json({ message: "Transaction not found" });
                        }
                    }
                    else if (status === prisma_2.statusTransaction.EXPIRED) {
                        yield prisma_1.default.$transaction((tnx) => __awaiter(this, void 0, void 0, function* () {
                            yield tnx.transaction.update({
                                data: { status: "EXPIRED" },
                                where: { id: external_id },
                            });
                            const transaction = yield tnx.transaction.findUnique({
                                where: { id: external_id },
                            });
                            if (transaction) {
                                if (transaction.voucherId) {
                                    yield prisma_1.default.voucher.update({
                                        where: { id: transaction.voucherId },
                                        data: { used: false },
                                    });
                                }
                                if (transaction.pointId) {
                                    yield prisma_1.default.point.update({
                                        where: { id: transaction.pointId },
                                        data: { used: false },
                                    });
                                }
                                yield tnx.ticket.update({
                                    data: { seatAvailable: { increment: transaction.quantity } },
                                    where: { id: transaction.ticketId },
                                });
                            }
                        }));
                    }
                    res.status(200).json({ message: "Success" });
                }
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ error });
            }
        });
    }
}
exports.TransactionController = TransactionController;
