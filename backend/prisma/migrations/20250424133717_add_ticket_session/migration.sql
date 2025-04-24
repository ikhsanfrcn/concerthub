/*
  Warnings:

  - You are about to drop the column `transactionId` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `purchasedTicketId` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seatAvailable` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionId` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Made the column `ticketId` on table `Transaction` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "TicketCategory" AS ENUM ('REGULAR', 'PREMIUM', 'VIP');

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_transactionId_fkey";

-- AlterTable
ALTER TABLE "ReferralUsage" ADD COLUMN     "pointGranted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "purchasedTicketId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "transactionId",
ADD COLUMN     "category" "TicketCategory" NOT NULL,
ADD COLUMN     "seatAvailable" INTEGER NOT NULL,
ADD COLUMN     "sessionId" TEXT NOT NULL,
ALTER COLUMN "eventId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "status" SET DEFAULT 'PENDING',
ALTER COLUMN "ticketId" SET NOT NULL;

-- CreateTable
CREATE TABLE "EventSession" (
    "id" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "location" TEXT NOT NULL,

    CONSTRAINT "EventSession_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchasedTicket" (
    "id" TEXT NOT NULL,
    "transactionId" TEXT NOT NULL,
    "ticketId" TEXT NOT NULL,
    "sessionId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "qrCode" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PurchasedTicket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "EventSession" ADD CONSTRAINT "EventSession_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "EventSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedTicket" ADD CONSTRAINT "PurchasedTicket_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "EventSession"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedTicket" ADD CONSTRAINT "PurchasedTicket_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedTicket" ADD CONSTRAINT "PurchasedTicket_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchasedTicket" ADD CONSTRAINT "PurchasedTicket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_purchasedTicketId_fkey" FOREIGN KEY ("purchasedTicketId") REFERENCES "PurchasedTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
