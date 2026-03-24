import { ENV } from "../../shared/constants/env.js";

export class SalesforceService {
  createSalesforceEntity = async () => {
    const accessToken = await this.getAccessToken();
    const { id } = await this.createAccount(accessToken as string);
    const { id: contactId } = await this.createContact(accessToken, id);
    return contactId;
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

    return data.access_token;
  };

  createAccount = async (accessToken: string, companyName = "Test") => {
    const response = await fetch(
      `${ENV.SF_LOGIN_URL}/services/data/v59.0/sobjects/Account`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: companyName,
        }),
      },
    );

    const data = await response.json();

    if (Array.isArray(data) && data[0]?.errorCode) {
      throw new Error(`SF error: ${data[0].errorCode} — ${data[0].message}`);
    }

    return data as { id: string; success: boolean };
  };

  createContact = async (accessToken: string, accountId: string) => {
    const response = await fetch(
      `${ENV.SF_LOGIN_URL}/services/data/v59.0/sobjects/Contact`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          FirstName: "John",
          LastName: "Snow",
          Email: "Snow@email.com",
          Phone: "+77777777",
          Title: "Developer",
          AccountId: accountId,
        }),
      },
    );

    const data = await response.json();

    if (Array.isArray(data) && data[0]?.errorCode) {
      throw new Error(`SF error: ${data[0].errorCode} — ${data[0].message}`);
    }

    return data as { id: string; success: boolean };
  };
}

export const salesforceService = new SalesforceService();
