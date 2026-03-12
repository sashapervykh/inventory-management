import z from "zod";

export const userSchema = z.object({
  id: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string(),
  type: z.enum(["user", "admin", "none"]),
});
