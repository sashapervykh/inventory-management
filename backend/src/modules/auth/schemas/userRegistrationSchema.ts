import z from "zod";

export const userRegistrationSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.email(),
  password: z.string(),
});
