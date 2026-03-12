import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { METHODS } from "../../../shared/constants/METHODS";
import { accessSchema } from "../model/schemas/inventorySchema";

export async function sendInventoryAccessRequest({
  isPublic,
  inventoryId,
}: {
  isPublic: boolean;
  inventoryId: string;
}) {
  try {
    const body = JSON.stringify({ isPublic });
    const endpoint = `${API_ENDPOINTS.INVENTORIES}/${inventoryId}`;
    const method = METHODS.PUT;
    await requestApi({
      endpoint,
      method,
      schema: accessSchema,
      options: { body },
    });
  } catch (error) {
    console.log(error);
    console.error("Error when updating inventory");
  }
}
