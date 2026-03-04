import type { NextFunction, Request, Response } from "express";
import {
  InventoriesService,
  inventoriesService,
} from "./inventories.service.js";
import { createInventorySchema } from "./schemas/createInventorySchema.js";
import { validateUserId } from "../../shared/utils/validateUserId.js";

class InventoriesController {
  private service: InventoriesService;

  constructor(service: InventoriesService) {
    this.service = service;
  }

  createInventory = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const ownerId = validateUserId(req.user?.id);
      const inventoryInfo = createInventorySchema.parse(req.body);
      const inventory = await this.service.createInventory({
        ...inventoryInfo,
        ownerId,
      });
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  };

  getInventoryById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id } = req.params;
      if (!id || typeof id !== "string") {
        throw new Error("Inventory id was not received");
      }
      const inventory = await this.service.getInventoryById(id);
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  };

  updateInventoryById = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const { id } = req.params;
      const data = req.body;
      if (!id || typeof id !== "string") {
        throw new Error("Inventory id was not received");
      }
      const inventory = await this.service.updateInventoryById(id, data);
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  };
}

export const inventoriesController = new InventoriesController(
  inventoriesService,
);
