import z from "zod";

export const reportSchema = z.object({
  summary: z.string(),
  priority: z.enum(["High", "Average", "Low"]),
  reportedBy: z.string(),
  currentLink: z.string(),
  inventoryId: z.string().optional().nullable(),
});
