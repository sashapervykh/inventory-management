import z from "zod";

export const accessTokenSchema = z.object({
  access_token: z.string(),
});
