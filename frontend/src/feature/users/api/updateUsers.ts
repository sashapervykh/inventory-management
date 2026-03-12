import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { batchSchema } from "../model/schemas/batchRequest";
import type { StatusUpdateDto } from "../model/types/StatusUpdateDto";

export async function fetchUpdatingUsersStatus(
  statusUpdateDto: StatusUpdateDto,
) {
  const users = await requestApi({
    endpoint: `${API_ENDPOINTS.USERS}/${API_SUBROUTES.USERS.STATUS}`,
    method: METHODS.PATCH,
    schema: batchSchema,
    options: { body: JSON.stringify(statusUpdateDto) },
  });
  return users;
}
