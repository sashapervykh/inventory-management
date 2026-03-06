import z, { ZodType } from "zod";
import { API_URL } from "../constants/API_URL";

export async function requestApi<T extends ZodType>(
  endpoint: string,
  schema: T,
  options?: RequestInit,
): Promise<z.infer<T>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  return schema.parse(data);
}
