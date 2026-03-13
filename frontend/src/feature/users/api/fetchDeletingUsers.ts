import type { Key } from "react";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { requestApi } from "../../../shared/api/requestApi";
import { METHODS } from "../../../shared/constants/METHODS";
import { deleteRequest } from "../model/schemas/deleteRequest";

export async function fetchDeletingUsers(deletedUsers: Key[]) {
  const body = JSON.stringify(deletedUsers);
  return await requestApi({
    endpoint: `${API_ENDPOINTS.USERS}/${API_SUBROUTES.USERS.DELETE}`,
    method: METHODS.DELETE,
    schema: deleteRequest,
    options: { body },
  });
}
