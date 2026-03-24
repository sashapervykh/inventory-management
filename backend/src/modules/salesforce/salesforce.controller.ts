import type { NextFunction, Request, Response } from "express";
import { SalesforceService, salesforceService } from "./salesforce.service.js";

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
      res.status(200).send({ message: "Contact created successfully" });
    } catch (err) {
      next(err);
    }
  };
}

export const salesforceController = new SalesforceController(salesforceService);
