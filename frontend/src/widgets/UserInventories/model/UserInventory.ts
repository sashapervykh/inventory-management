import z from "zod";
import type {
  inventoriesListSchema,
  inventorySchema,
} from "./userInventoriesSchema";

export type UserInventories = z.infer<typeof inventoriesListSchema>;
export type UserInventory = z.infer<typeof inventorySchema>;
