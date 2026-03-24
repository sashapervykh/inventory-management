import z from "zod";

export const inventoryIdSchema = z.string().min(1, "Id is required");
