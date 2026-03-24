import z from "zod";

export const editorsDeletingSchema = z.object({ userIds: z.array(z.string()) });
