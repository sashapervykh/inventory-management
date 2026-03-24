import z from "zod";
import type { updateInventorySchema } from "../schemas/updateInventorySchema.js";

export type UpdateInventoryDTO = z.infer<typeof updateInventorySchema>;
