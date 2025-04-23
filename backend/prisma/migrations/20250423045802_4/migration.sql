-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_ticketId_fkey";

-- AlterTable
ALTER TABLE "Ticket" ADD COLUMN     "transactionId" TEXT;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE SET NULL ON UPDATE CASCADE;
