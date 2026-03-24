import z from "zod";

export const salesforceResponseSchema = z.object({
  success: z.boolean(),
  id: z.string(),
});
