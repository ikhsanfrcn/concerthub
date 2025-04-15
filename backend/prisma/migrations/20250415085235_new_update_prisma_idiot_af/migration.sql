/*
  Warnings:

  - You are about to drop the column `promotionId` on the `ReferralUsage` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReferralUsage" DROP CONSTRAINT "ReferralUsage_promotionId_fkey";

-- AlterTable
ALTER TABLE "ReferralUsage" DROP COLUMN "promotionId";
