import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import type { CustomIdPartsDto } from "../model/types/IdPartDto";
import { customIdPartsSchema } from "../schemas/customIdPartsSchema";

export async function sendUpdatedIdFormat(
  inventoryId: string,
  newCustomIdFormat: CustomIdPartsDto,
) {
  const body = JSON.stringify(newCustomIdFormat);
  const customIdFormat = await requestApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}${inventoryId}/${API_SUBROUTES.INVENTORIES.CUSTOM_ID}`,
    method: METHODS.PUT,
    schema: customIdPartsSchema,
    options: { body },
  });
  return customIdFormat;
}
