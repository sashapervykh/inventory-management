import z from "zod";
import type { statusUpdateDtoSchema } from "../schema/statusUpdateDtoSchema.js";

export type StatusUpdateDto = z.infer<typeof statusUpdateDtoSchema>;
