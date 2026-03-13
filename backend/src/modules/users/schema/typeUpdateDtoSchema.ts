import z from "zod";

export const typeUpdateDtoSchema = z.object({
  userIds: z.array(z.string()),
  userType: z.enum(["admin", "user"]),
});
