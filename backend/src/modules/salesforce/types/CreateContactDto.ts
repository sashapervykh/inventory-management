import z from "zod";
import type { createContactDtoSchema } from "../schemas/createContactDtoSchema.js";

export type CreateContactDto = z.infer<typeof createContactDtoSchema>;
