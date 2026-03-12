import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { METHODS } from "../../../shared/constants/METHODS";
import { latestInventoriesList } from "../model/latestInventoriesSchemas";

export async function getLatestInventories() {
  const userInventories = await requestApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}?orderBy=latest`,
    method: METHODS.GET,
    schema: latestInventoriesList,
  });
  return userInventories;
}
