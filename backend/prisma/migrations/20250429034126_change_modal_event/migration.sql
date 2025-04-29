/*
  Warnings:

  - You are about to drop the column `description` on the `Event` table. All the data in the column will be lost.
  - The `category` column on the `Event` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "EventCategory" AS ENUM ('POP', 'FOLK', 'JAZZ', 'CLASSIC', 'ROCK');

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "description",
DROP COLUMN "category",
ADD COLUMN     "category" "EventCategory" NOT NULL DEFAULT 'POP';
