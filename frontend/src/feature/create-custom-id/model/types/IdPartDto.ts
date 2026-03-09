import z from "zod";
import type { customIdPartsSchema } from "../../schemas/customIdPartsSchema";

export type CustomIdPartsDto = z.infer<typeof customIdPartsSchema>;
