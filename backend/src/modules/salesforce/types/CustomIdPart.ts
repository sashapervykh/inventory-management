import z from "zod";
import type { customIdPartSchema } from "../schemas/customIdPartSchema.js";

export type CustomIdParts = z.infer<typeof customIdPartSchema>;
