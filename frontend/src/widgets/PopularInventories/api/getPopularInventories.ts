import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { METHODS } from "../../../shared/constants/METHODS";
import { popularInventoriesList } from "../model/popularInventoriesSchemas";

export async function getPopularInventories() {
  const userInventories = await requestApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}?orderBy=popular`,
    method: METHODS.GET,
    schema: popularInventoriesList,
  });
  return userInventories;
}
