import z from "zod";

export const deletedUsers = z.array(z.string());
