import type { NextFunction, Request, Response } from "express";
import { TagsService, tagsService } from "./tags.service.js";

class TagsController {
  service: TagsService;

  constructor(service: TagsService) {
    this.service = service;
  }

  getAllTags = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const tags = await this.service.getAllTags();
      res.status(200).send(tags);
    } catch (err) {
      next(err);
    }
  };
}

export const tagsController = new TagsController(tagsService);
