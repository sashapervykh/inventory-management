import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";

export async function getEditors(requestBody) {
  return await requestApi({
    endpoint: `${API_ENDPOINTS.AUTH}/${API_SUBROUTES.AUTH.REGISTRATION}`,
    method: METHODS.POST,
    schema: editorsSchema,
    options: { body: {} },
  });
}
