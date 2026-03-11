-- DropForeignKey
ALTER TABLE "inventories" DROP CONSTRAINT "inventories_owner_id_fkey";

-- DropForeignKey
ALTER TABLE "inventory_access" DROP CONSTRAINT "inventory_access_inventory_id_fkey";

-- DropForeignKey
ALTER TABLE "inventory_tags" DROP CONSTRAINT "inventory_tags_inventory_id_fkey";

-- DropForeignKey
ALTER TABLE "items" DROP CONSTRAINT "items_inventoryId_fkey";

-- AddForeignKey
ALTER TABLE "inventories" ADD CONSTRAINT "inventories_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_tags" ADD CONSTRAINT "inventory_tags_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_access" ADD CONSTRAINT "inventory_access_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_inventoryId_fkey" FOREIGN KEY ("inventoryId") REFERENCES "inventories"("id") ON DELETE CASCADE ON UPDATE CASCADE;
