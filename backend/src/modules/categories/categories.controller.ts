import type { NextFunction, Request, Response } from "express";
import { CategoriesService, categoriesService } from "./categories.service.js";

class CategoriesController {
  service: CategoriesService;

  constructor(service: CategoriesService) {
    this.service = service;
  }

  async getAllCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.service.getAllCategories();
      res.status(200).send(categories);
    } catch (err) {
      next(err);
    }
  }
}

export const categoriesController = new CategoriesController(categoriesService);
