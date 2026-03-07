import { API_URL } from "../constants/API_URL";
import { METHODS } from "../constants/METHODS";

interface Props {
  endpoint: string;
  options?: RequestInit;
}

export async function requestDeleteApi({
  endpoint,
  options,
}: Props): Promise<boolean> {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: METHODS.DELETE,
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!response.ok) {
    throw new Error(await response.text());
  }
  return true;
}
