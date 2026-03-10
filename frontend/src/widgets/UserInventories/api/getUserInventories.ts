import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { editorsSchema } from "../model/schemas/editors.schema";

export async function getUserInventories(inventoryId: string) {
  const userInventories = await requestApi({
    endpoint: `${API_ENDPOINTS.USERS}/${API_SUBROUTES.USERS.USER_INVENTORIES}`,
    method: METHODS.GET,
    schema: editorsSchema,
  });
  return editingUsers;
}
