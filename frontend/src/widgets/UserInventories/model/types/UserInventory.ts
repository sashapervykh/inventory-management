import z from "zod";
import type {
  inventoriesListSchema,
  inventorySchema,
} from "../hooks/userInventoriesSchema";

export type UserInventories = z.infer<typeof inventoriesListSchema>;
export type UserInventory = z.infer<typeof inventorySchema>;
