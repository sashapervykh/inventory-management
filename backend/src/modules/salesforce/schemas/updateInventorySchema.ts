import z from "zod";

export const updateInventorySchema = z.object({
  isPublic: z.boolean().optional(),
});
