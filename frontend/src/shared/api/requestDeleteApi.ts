import { API_URL } from "../constants/API_URL";
import { METHODS } from "../constants/METHODS";
import { errorResponse } from "../schemas/errorResposne";

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
    const json = await response.json();
    const message = errorResponse.parse(json).message;
    throw new Error(message);
  }
  return true;
}
