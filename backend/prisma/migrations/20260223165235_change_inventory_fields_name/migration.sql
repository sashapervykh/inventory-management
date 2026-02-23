/*
  Warnings:

  - You are about to drop the column `isPrivate` on the `Inventory` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `Inventory` table. All the data in the column will be lost.
  - Added the required column `is_private` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_id` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Inventory" DROP CONSTRAINT "Inventory_ownerId_fkey";

-- AlterTable
ALTER TABLE "Inventory" DROP COLUMN "isPrivate",
DROP COLUMN "ownerId",
ADD COLUMN     "is_private" BOOLEAN NOT NULL,
ADD COLUMN     "owner_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
