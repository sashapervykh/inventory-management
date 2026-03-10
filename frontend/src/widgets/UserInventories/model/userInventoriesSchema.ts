import z from "zod";

export const inventoriesSchema = z.array(
  z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    category: z.string(),
  }),
);

export const userInventoriesSchema = z.object({
  owned: inventoriesSchema,
  edited: inventoriesSchema,
});
