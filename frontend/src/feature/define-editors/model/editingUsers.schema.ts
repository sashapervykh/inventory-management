import z from "zod";

export const editingUsersSchema = z.array(
  z.object({
    id: z.string(),
    fullName: z.string(),
    email: z.string(),
  }),
);
