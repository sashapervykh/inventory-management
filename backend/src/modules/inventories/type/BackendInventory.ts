import type { Prisma } from "@prisma/client";
import type { InventoriesRepository } from "../inventories.repository.js";

export type BackendInventory = Prisma.PromiseReturnType<
  InventoriesRepository["getInventoryById"]
>;
