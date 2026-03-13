import z from "zod";

export const userIdSchema = z.looseObject({
  userId: z.string().min(1, "User id is required"),
});
