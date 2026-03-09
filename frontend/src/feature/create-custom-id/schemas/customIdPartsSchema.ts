import z from "zod";

export const customIdPartsSchema = z.array(
  z.object({ type: z.string(), value: z.string() }),
);
