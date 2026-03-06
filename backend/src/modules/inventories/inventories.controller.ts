import type { NextFunction, Request, Response } from "express";
import {
  InventoriesService,
  inventoriesService,
} from "./inventories.service.js";
import { createInventorySchema } from "./schemas/createInventorySchema.js";
import { validateUserId } from "../../shared/utils/validateUserId.js";
import { updateInventorySchema } from "./schemas/updateInventorySchema.js";
import { inventoryIdSchema } from "./schemas/inventoryIdSchema.js";
import { getUserIds } from "./utils/getUserIds.js";
import { editorsDeletingSchema } from "./schemas/editorsDeletingSchema.js";

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

  deleteEditors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = inventoryIdSchema.parse(req.params.id);
      const data = editorsDeletingSchema.parse(req.body);
      await this.service.deleteEditors(id, data.userIds);
      res.status(204).send({ message: "Successfully deleted" });
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
      const id = inventoryIdSchema.parse(req.params.id);
      const inventory = await this.service.getInventoryById(id);
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  };

  getEditors = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const inventoryId = inventoryIdSchema.parse(req.params.id);
      const inventory = await this.service.getEditors(inventoryId);
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
      const id = inventoryIdSchema.parse(req.params.id);
      const updatedFields = updateInventorySchema.parse(req.body);
      const inventory = await this.service.updateInventoryById(
        id,
        updatedFields,
      );
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  };

  updateInventoryAccess = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const inventoryId = inventoryIdSchema.parse(req.params.id);
      const userIds = getUserIds(req.body);
      const inventory = await this.service.updateAccessInventory(
        inventoryId,
        userIds,
      );
      res.status(200).send(inventory);
    } catch (err) {
      next(err);
    }
  };
}

export const inventoriesController = new InventoriesController(
  inventoriesService,
);
