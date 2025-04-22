/*
  Warnings:

  - Added the required column `expireAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `Transaction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "statusTransaction" AS ENUM ('PENDING', 'PAID', 'EXPIRED', 'CANCEL');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "expireAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "status" "statusTransaction" NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
