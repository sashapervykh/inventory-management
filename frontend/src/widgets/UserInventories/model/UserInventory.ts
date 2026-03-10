import z from "zod";
import type { inventoriesSchema } from "./userInventoriesSchema";

export type UserInventories = z.infer<typeof inventoriesSchema>;
