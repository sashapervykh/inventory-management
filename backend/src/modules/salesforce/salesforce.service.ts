import { ENV } from "../../shared/constants/env.js";
import { SALESFORCE_ENDPOINTS } from "./constants/salesforceEndpoints.js";
import type { CreateContactDto } from "./types/CreateContactDto.js";

export class SalesforceService {
  createSalesforceEntity = async (createContactDto: CreateContactDto) => {
    const accessToken = await this.getAccessToken();
    const { id } = await this.createAccount(
      accessToken,
      createContactDto.firstName,
      createContactDto.lastName,
    );
    const { id: contactId } = await this.createContact(
      accessToken,
      id,
      createContactDto,
    );
    return contactId;
  };

  getAccessToken = async () => {
    const params = new URLSearchParams({
      grant_type: "client_credentials",
      client_id: ENV.SF_KEY,
      client_secret: ENV.SF_SECRET,
    });
    console.log(params);

    const response = await fetch(
      `${ENV.SF_LOGIN_URL}/${SALESFORCE_ENDPOINTS.ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      },
    );
    console.log(response);
    const data = await response.json();
    console.log(data);

    return data.access_token as string;
  };

  createAccount = async (
    accessToken: string,
    firstName: string,
    lastName: string,
  ) => {
    const response = await fetch(
      `${ENV.SF_LOGIN_URL}/${SALESFORCE_ENDPOINTS.CREATE.BASE}/${SALESFORCE_ENDPOINTS.CREATE.ACCOUNT}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: `${firstName} ${lastName} Account`,
        }),
      },
    );

    const data = await response.json();

    if (Array.isArray(data) && data[0]?.errorCode) {
      throw new Error(`SF error: ${data[0].errorCode} — ${data[0].message}`);
    }

    return data as { id: string; success: boolean };
  };

  createContact = async (
    accessToken: string,
    accountId: string,
    body: CreateContactDto,
  ) => {
    const response = await fetch(
      `${ENV.SF_LOGIN_URL}/${SALESFORCE_ENDPOINTS.CREATE.BASE}/${SALESFORCE_ENDPOINTS.CREATE.CONTACT}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...body,
          accountId: accountId,
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
