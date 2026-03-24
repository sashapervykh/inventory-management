import z from "zod";

export const createContactDtoSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  title: z.string(),
});
