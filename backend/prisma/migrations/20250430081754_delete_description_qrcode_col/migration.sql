/*
  Warnings:

  - You are about to drop the column `qrCode` on the `PurchasedTicket` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PurchasedTicket" DROP COLUMN "qrCode";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "description";
