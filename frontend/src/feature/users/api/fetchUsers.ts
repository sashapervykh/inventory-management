import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { METHODS } from "../../../shared/constants/METHODS";
import { usersSchema } from "../model/schemas/usersSchema";

export async function fetchUsers() {
  const users = await requestApi({
    endpoint: `${API_ENDPOINTS.USERS}/`,
    method: METHODS.GET,
    schema: usersSchema,
  });
  return users;
}
