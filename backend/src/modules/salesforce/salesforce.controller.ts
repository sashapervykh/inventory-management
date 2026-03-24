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
      const accessToken = await this.service.createSalesforceEntity();
      res.status(200).send(accessToken);
    } catch (err) {
      next(err);
    }
  };
}

export const salesforceController = new SalesforceController(salesforceService);
