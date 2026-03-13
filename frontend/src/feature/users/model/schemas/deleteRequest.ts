import z from "zod";

export const deleteRequest = z.object({ affectedSelf: z.boolean() });
