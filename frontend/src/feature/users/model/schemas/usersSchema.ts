import z from "zod";

export const userSchema = z.object({
  id: z.string(),
  email: z.string(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  fullName: z.string(),
  lastLoginAt: z.string().nullable(),
  createdAt: z.string(),
  status: z.enum(["active", "blocked"]),
  type: z.enum(["admin", "user", "none"]),
});

export const usersSchema = z.array(userSchema);
