import z from "zod";

export const deleteResponseSchema = z.object({ message: z.string() });
