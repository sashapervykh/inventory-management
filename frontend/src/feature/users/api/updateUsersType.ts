import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { batchSchema } from "../model/schemas/batchRequest";
import type { TypeUpdateDto } from "../model/types/TypeUpdateDto";

export async function fetchUpdatingUsersType(typeUpdateDto: TypeUpdateDto) {
  const users = await requestApi({
    endpoint: `${API_ENDPOINTS.USERS}/${API_SUBROUTES.USERS.TYPE}`,
    method: METHODS.PATCH,
    schema: batchSchema,
    options: { body: JSON.stringify(typeUpdateDto) },
  });
  return users;
}
