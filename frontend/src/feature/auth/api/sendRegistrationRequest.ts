import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { userSchema } from "../model/schemas/userSchema";
import type { UserRegistrationDto } from "../model/types/UserRegistrationDto";

export async function sendRegistrationRequest(
  requestBody: UserRegistrationDto,
) {
  return await requestApi({
    endpoint: `${API_ENDPOINTS.AUTH}/${API_SUBROUTES.AUTH.REGISTRATION}`,
    method: METHODS.POST,
    schema: userSchema,
    options: { body: JSON.stringify(requestBody) },
  });
}
