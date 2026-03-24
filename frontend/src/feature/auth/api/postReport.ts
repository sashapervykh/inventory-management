import { requestApi } from "../../../shared/api/requestApi";
import { API_ENDPOINTS } from "../../../shared/constants/API_ENDPOINTS";
import { API_SUBROUTES } from "../../../shared/constants/API_SUBROUTES";
import { METHODS } from "../../../shared/constants/METHODS";
import { reportSchema } from "../model/schemas/reportSchema";

export async function postReport(report: string) {
  const reportResponse = await requestApi({
    endpoint: `${API_ENDPOINTS.SUPPORT}/${API_SUBROUTES.SUPPORT.REPORT}`,
    method: METHODS.POST,
    schema: reportSchema,
    options: { body: report },
  });
  return reportResponse;
}
