import z from "zod";

export const createInventorySchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Title is required"),
  isPublic: z.boolean().default(false),
});
