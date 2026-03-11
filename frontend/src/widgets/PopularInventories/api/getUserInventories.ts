import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { METHODS } from "../../../shared/constants/METHODS";
import { userInventoriesSchema } from "../model/userInventoriesSchema";

export async function getPopularInventories() {
  const userInventories = await requestApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}?sort=popular`,
    method: METHODS.GET,
    schema: userInventoriesSchema,
  });
  return userInventories;
}
