import z from "zod";
import type {
  latestInventoriesList,
  latestInventorySchema,
} from "./latestInventoriesSchemas";

export type LatestInventories = z.infer<typeof latestInventoriesList>;
export type LatestInventory = z.infer<typeof latestInventorySchema>;
