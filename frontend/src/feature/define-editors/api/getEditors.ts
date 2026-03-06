import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { editingUsersSchema } from "../model/editingUsers.schema";

export async function getEditors(inventoryId: string) {
  const editingUsers = await requestApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}${inventoryId}/${API_SUBROUTES.INVENTORIES.ACCESS}`,
    method: METHODS.GET,
    schema: editingUsersSchema,
  });
  return editingUsers;
}
