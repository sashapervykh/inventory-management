-- CreateTable
CREATE TABLE "inventory_access" (
    "user_id" TEXT NOT NULL,
    "inventory_id" TEXT NOT NULL,

    CONSTRAINT "inventory_access_pkey" PRIMARY KEY ("user_id","inventory_id")
);

-- AddForeignKey
ALTER TABLE "inventory_access" ADD CONSTRAINT "inventory_access_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "inventory_access" ADD CONSTRAINT "inventory_access_inventory_id_fkey" FOREIGN KEY ("inventory_id") REFERENCES "inventories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
