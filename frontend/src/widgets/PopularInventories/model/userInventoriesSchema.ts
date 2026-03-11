import z from "zod";

export const inventorySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
});

export const inventoriesListSchema = z.array(inventorySchema);

export const userInventoriesSchema = z.object({
  owned: inventoriesListSchema,
  edited: inventoriesListSchema,
});
