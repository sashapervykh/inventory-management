import z from "zod";
import { editorsSchema } from "../schemas/editors.schema";

export type Editors = z.infer<typeof editorsSchema>;
