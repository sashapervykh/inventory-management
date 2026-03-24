import { ENV } from "../../shared/constants/env.js";
import { ERROR_MESSAGES } from "../../shared/constants/errorMessages.js";
import { SalesforceError } from "../../shared/errors/SalesforceError.js";
import { SALESFORCE_ENDPOINTS } from "./constants/salesforceEndpoints.js";
import { accessTokenSchema } from "./schemas/accessTokenSchema.js";
import { salesforceResponseSchema } from "./schemas/salesforceResponseSchema.js";
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

    const data = await response.json();
    const typedData = accessTokenSchema.parse(data);
    return typedData.access_token;
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

    if (!response.ok) {
      throw new SalesforceError(ERROR_MESSAGES.ACCOUNT_ERROR);
    }
    const data = await response.json();
    const typeData = salesforceResponseSchema.parse(data);
    return typeData;
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

    if (!response.ok) {
      throw new SalesforceError(ERROR_MESSAGES.CONTACT_ERROR);
    }
    const data = await response.json();
    const typeData = salesforceResponseSchema.parse(data);
    return typeData;
  };
}

export const salesforceService = new SalesforceService();
