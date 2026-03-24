import type { Prisma } from "@prisma/client";
import type { InventoriesRepository } from "../inventories.repository.js";

export type BackendEditors = Prisma.PromiseReturnType<
  InventoriesRepository["getEditors"]
>;
