import z from "zod";

export const latestInventorySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  isPublic: z.boolean(),
  category: z.string(),
  ownerName: z.string(),
  ownerEmail: z.string(),
  createdAt: z.string(),
  tags: z.array(z.string()).optional(),
});

export const latestInventoriesList = z.array(latestInventorySchema);
