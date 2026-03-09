-- AlterTable
ALTER TABLE "inventories" ADD COLUMN     "custom_id_parts" JSONB;

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "custom-id" TEXT NOT NULL,
    "inventoryId" TEXT NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "items_inventoryId_custom-id_key" ON "items"("inventoryId", "custom-id");

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
