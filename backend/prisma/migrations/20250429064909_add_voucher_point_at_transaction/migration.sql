/*
  Warnings:

  - You are about to drop the column `price` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "price",
ADD COLUMN     "totalIncome" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "pointId" TEXT,
ADD COLUMN     "voucherId" TEXT;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_voucherId_fkey" FOREIGN KEY ("voucherId") REFERENCES "Voucher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_pointId_fkey" FOREIGN KEY ("pointId") REFERENCES "Point"("id") ON DELETE SET NULL ON UPDATE CASCADE;
