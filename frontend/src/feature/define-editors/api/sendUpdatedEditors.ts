import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { editorsSchema } from "../model/schemas/editors.schema";
import { type Editors } from "../model/types/Editors";

export async function sendUpdatedEditors(
  inventoryId: string,
  newUsers: Editors,
) {
  const body = JSON.stringify([...newUsers]);
  const editors = await requestApi({
    endpoint: `${API_ENDPOINTS.INVENTORIES}${inventoryId}/${API_SUBROUTES.INVENTORIES.ACCESS}`,
    method: METHODS.POST,
    schema: editorsSchema,
    options: { body },
  });
  return editors;
}
