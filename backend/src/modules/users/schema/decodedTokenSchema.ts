import z from "zod";

export const decodedTokenSchema = z.object({
  userId: z.string(),
});
