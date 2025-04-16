/*
  Warnings:

  - You are about to drop the column `userId` on the `ReferralUsage` table. All the data in the column will be lost.
  - You are about to drop the column `usedReferralById` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReferralUsage" DROP CONSTRAINT "ReferralUsage_userId_fkey";

-- AlterTable
ALTER TABLE "ReferralUsage" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "usedReferralById";
