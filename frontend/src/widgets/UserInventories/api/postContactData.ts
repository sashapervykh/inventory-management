import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { contactSchema } from "../model/schemas/contactSchema";
import type { CreateContactDto } from "../model/types/CreateContactDto";

export async function postContactData(formData: CreateContactDto) {
  const contactResult = await requestApi({
    endpoint: `${API_ENDPOINTS.SALESFORCE}/${API_SUBROUTES.SALESFORCE.CONTACT}`,
    method: METHODS.POST,
    schema: contactSchema,
    options: { body: JSON.stringify(formData) },
  });
  return contactResult;
}
