import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { userInventoriesSchema } from "../model/userInventoriesSchema";

export async function getUserInventories() {
  const userInventories = await requestApi({
    endpoint: `${API_ENDPOINTS.USERS}/${API_SUBROUTES.USERS.USER_INVENTORIES}`,
    method: METHODS.GET,
    schema: userInventoriesSchema,
  });
  return userInventories;
}
