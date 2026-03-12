import z from "zod";

export const statusUpdateDtoSchema = z.object({
  userIds: z.array(z.string()),
  isBlocked: z.boolean(),
});
