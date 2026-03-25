import z from "zod";

export const contactSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  contactId: z.string(),
});
