/*
  Warnings:

  - You are about to drop the column `ticketTypeId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_ticketTypeId_fkey";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "ticketTypeId",
ADD COLUMN     "ticketId" TEXT;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_ticketId_fkey" FOREIGN KEY ("ticketId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;
