import z from "zod";

export const batchSchema = z.object({
  count: z.number(),
  affectedSelf: z.boolean(),
});
