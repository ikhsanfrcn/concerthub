/*
  Warnings:

  - You are about to drop the column `pointGranted` on the `ReferralUsage` table. All the data in the column will be lost.
  - You are about to drop the column `discount` on the `Transaction` table. All the data in the column will be lost.
  - You are about to drop the column `usedPoints` on the `Transaction` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ReferralUsage" DROP COLUMN "pointGranted";

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "discount",
DROP COLUMN "usedPoints";
