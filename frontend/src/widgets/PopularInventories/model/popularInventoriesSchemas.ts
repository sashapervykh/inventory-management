import z from "zod";

export const popularInventorySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  isPublic: z.boolean(),
  category: z.string(),
  ownerName: z.string(),
  ownerEmail: z.string(),
  tags: z.array(z.string()).optional(),
});

export const popularInventoriesList = z.array(popularInventorySchema);
