/*
  Warnings:

  - You are about to drop the column `is_private` on the `Inventory` table. All the data in the column will be lost.
  - Added the required column `is_public` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "is_private",
ADD COLUMN     "is_public" BOOLEAN NOT NULL;
