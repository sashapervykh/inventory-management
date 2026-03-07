import type { Key } from "react";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { requestDeleteApi } from "../../../shared/api/requestDeleteApi";

export async function sendDeletedEditors(
  inventoryId: string,
  deletedUsers: Key[],
) {
  const body = JSON.stringify({ userIds: [...deletedUsers] });
  return await requestDeleteApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}${inventoryId}/${API_SUBROUTES.INVENTORIES.ACCESS}`,
    options: { body },
  });
}
