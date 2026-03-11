import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { userSchema } from "../model/schemas/userSchema";
import type { UserLoginDto } from "../model/types/UserLoginDto";

export async function sendLoginRequest(requestBody: UserLoginDto) {
  return await requestApi({
    endpoint: `${API_ENDPOINTS.AUTH}/${API_SUBROUTES.AUTH.LOGIN}`,
    method: METHODS.POST,
    schema: userSchema,
    options: { body: JSON.stringify(requestBody) },
  });
}
