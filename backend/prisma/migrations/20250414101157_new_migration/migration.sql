/*
  Warnings:

  - You are about to drop the column `referredById` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `ReferralPoint` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReferralPoint" DROP CONSTRAINT "ReferralPoint_userId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_referredById_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "referredById",
ADD COLUMN     "usedReferralById" TEXT;

-- DropTable
DROP TABLE "ReferralPoint";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_usedReferralById_fkey" FOREIGN KEY ("usedReferralById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
