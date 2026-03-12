import z from "zod";
import type { typeUpdateDtoSchema } from "../schema/typeUpdateDtoSchema.js";

export type TypeUpdateDto = z.infer<typeof typeUpdateDtoSchema>;
