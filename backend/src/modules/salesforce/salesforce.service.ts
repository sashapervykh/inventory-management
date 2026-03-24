import { ENV } from "../../shared/constants/env.js";

export class SalesforceService {
  createSalesforceEntity = async () => {
    const accessToken = this.getAccessToken();
    return accessToken;
  };

  getAccessToken = async () => {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: ENV.SF_KEY,
      client_secret: ENV.SF_SECRET,
    });
    console.log(params);

    const response = await fetch(`${ENV.SF_LOGIN_URL}/services/oauth2/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });
    console.log(response);
    const data = await response.json();
    console.log(data);

    return data;
  };
}

export const salesforceService = new SalesforceService();
