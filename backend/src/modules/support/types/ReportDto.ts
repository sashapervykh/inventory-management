import z from "zod";
import type { reportSchema } from "../schemas/reportSchema.js";

export type ReportDto = z.infer<typeof reportSchema>;
