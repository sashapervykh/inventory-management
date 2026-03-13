import z from "zod";

export const deletedInventoriesSchema = z.array(z.string());
