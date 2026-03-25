import type { NextFunction, Request, Response } from "express";
import { SalesforceService, salesforceService } from "./salesforce.service.js";
import { createContactDtoSchema } from "./schemas/createContactDtoSchema.js";
import { validateUserId } from "../../shared/utils/validateUserId.js";

class SalesforceController {
  private service: SalesforceService;

  constructor(service: SalesforceService) {
    this.service = service;
  }

  createSalesforceEntity = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userId = validateUserId(req.user?.id);
      const contactData = createContactDtoSchema.parse(req.body);
      const { contactId } = await this.service.createSalesforceEntity(
        contactData,
        userId,
      );
      res.status(200).send({
        success: true,
        message: "Contact successfully created",
        contactId,
      });
    } catch (err) {
      next(err);
    }
  };
}

export const salesforceController = new SalesforceController(salesforceService);
