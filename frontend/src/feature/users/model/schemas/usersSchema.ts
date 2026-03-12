import z from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  fullName: z.string(),
  lastLoginAt: z.string().nullable(),
  createdAt: z.string(),
  type: z.enum(["admin", "user", "none"]),
});

export const usersSchema = z.array(userSchema);
