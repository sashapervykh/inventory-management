import z from "zod";

export const userIdsSchema = z.array(z.looseObject({ id: z.string() }));
