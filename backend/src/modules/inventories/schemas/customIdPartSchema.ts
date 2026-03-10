import z from "zod";

export const customIdPartSchema = z.array(
  z.object({ type: z.string(), value: z.string() }),
);
