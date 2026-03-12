import type { Key } from "react";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { requestDeleteApi } from "../../../shared/api/requestDeleteApi";

export async function fetchDeletingUsers(deletedUsers: Key[]) {
  const body = JSON.stringify(deletedUsers);
  return await requestDeleteApi({
    endpoint: `${API_ENDPOINTS.USERS}/${API_SUBROUTES.USERS.DELETE}`,
    options: { body },
  });
}
