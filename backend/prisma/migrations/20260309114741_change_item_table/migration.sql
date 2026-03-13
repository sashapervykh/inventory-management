/*
  Warnings:

  - You are about to drop the column `custom-id` on the `items` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[inventoryId,custom_id]` on the table `items` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `custom_id` to the `items` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "items_inventoryId_custom-id_key";

-- AlterTable
ALTER TABLE "items" DROP COLUMN "custom-id",
ADD COLUMN     "custom_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "items_inventoryId_custom_id_key" ON "items"("inventoryId", "custom_id");
