import z from "zod";
import type {
  popularInventoriesList,
  popularInventorySchema,
} from "./popularInventoriesSchemas";

export type PopularInventories = z.infer<typeof popularInventoriesList>;
export type PopularInventory = z.infer<typeof popularInventorySchema>;
