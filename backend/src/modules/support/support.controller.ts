import { type NextFunction, type Request, type Response } from "express";
import { supportService, SupportService } from "./support.service.js";
import { reportSchema } from "./schemas/reportSchema.js";

class SupportController {
  private service: SupportService;

  constructor(service: SupportService) {
    this.service = service;
  }

  createReport = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const report = reportSchema.parse(req.body);
      const inventory = await this.service.createReport(report);
      res.status(200).send({ message: "Inventory created successfully" });
    } catch (err) {
      next(err);
    }
  };
}

export const supportController = new SupportController(supportService);
