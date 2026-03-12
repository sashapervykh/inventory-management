import z, { ZodType } from "zod";
import { API_URL } from "../constants/API_URL";
import type { METHODS } from "../constants/METHODS";

interface Props<T> {
  endpoint: string;
  method: keyof typeof METHODS;
  schema: T;
  options?: RequestInit;
}

export async function requestApi<T extends ZodType>({
  endpoint,
  method,
  schema,
  options,
}: Props<T>): Promise<z.infer<T>> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }

  const data = await response.json();
  console.log(data);
  return schema.parse(data);
}
