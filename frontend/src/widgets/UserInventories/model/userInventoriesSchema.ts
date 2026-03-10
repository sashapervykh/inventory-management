import z from "zod";

const InventorySchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    category: z.string(),
  }),
);

export const userInventoriesSchema = z.object({
  owned: InventorySchema,
  edited: InventorySchema,
});
