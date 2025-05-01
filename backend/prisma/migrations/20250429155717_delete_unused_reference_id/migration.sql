/*
  Warnings:

  - You are about to drop the column `referenceId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Transaction_referenceId_key";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "referenceId";
