import type { NextFunction, Request, Response } from "express";
import { TagsService, tagsService } from "./tags.service.js";

class TagsController {
  service: TagsService;

  constructor(service: TagsService) {
    this.service = service;
  }

  getTagsByInput = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { search } = req.query;
      if (typeof search !== "string") throw new Error("Query is not received");
      const tags = await this.service.getAllTags(search);
      res.status(200).send(tags);
    } catch (err) {
      next(err);
    }
  };
}

export const tagsController = new TagsController(tagsService);
