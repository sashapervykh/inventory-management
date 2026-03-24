import type { NextFunction, Request, Response } from "express";
import { SalesforceService, salesforceService } from "./salesforce.service.js";
import { createContactDtoSchema } from "./schemas/createContactDtoSchema.js";

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
      const contactData = createContactDtoSchema.parse(req.body);
      await this.service.createSalesforceEntity(contactData);
      res
        .status(200)
        .send({ success: true, message: "Contact successfully created" });
    } catch (err) {
      next(err);
    }
  };
}

export const salesforceController = new SalesforceController(salesforceService);
