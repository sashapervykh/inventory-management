import type { NextFunction, Request, Response } from "express";
import { UsersService, usersService } from "./users.service.js";
import jwt from "jsonwebtoken";
import { decodedTokenSchema } from "./schema/decodedTokenSchema.js";
import { getTypedSearch } from "./utils/getTypedSearch.js";
import { getTypedLimit } from "./utils/getTypedLimit.js";
import { AuthError } from "../../shared/errors/AuthError.js";
import { deletedInventoriesSchema } from "./schema/deletedInventoriesSchema.js";
import { statusUpdateDtoSchema } from "./schema/statusUpdateDtoSchema.js";
import { typeUpdateDtoSchema } from "./schema/typeUpdateDtoSchema.js";
import { deletedUsers } from "./schema/deletedUsers.js";

class UsersController {
  private service: UsersService;
  constructor(service: UsersService) {
    this.service = service;
  }

  getUsers = async (req: Request, res: Response) => {
    const search = getTypedSearch(req);
    const limit = getTypedLimit(req);
    const users = await this.service.getUsers(search, limit);
    res.status(200).send(users);
  };

  deleteUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userIds = deletedUsers.parse(req.body);
      await this.service.deleteUsers(userIds);
      res.status(204).send({ message: "Successfully deleted" });
    } catch (err) {
      next(err);
    }
  };

  deleteUserInventories = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userId = req.user?.id;
      if (!userId) throw new AuthError();
      const inventoriesId = deletedInventoriesSchema.parse(req.body);
      await this.service.deleteUserInventories(userId, inventoriesId);
      res.status(204).send({ message: "Successfully deleted" });
    } catch (err) {
      next(err);
    }
  };

  findById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.auth;
      const userInfo = decodedTokenSchema.parse(jwt.decode(token));
      const user = await this.service.findById(userInfo.userId);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  };

  getUserInventories = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const userId = req.user?.id;
      if (!userId) throw new AuthError();
      const userInventories = await this.service.getUserInventories(userId);
      res.status(200).send(userInventories);
    } catch (error) {
      next(error);
    }
  };

  updateUsersStatus = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const updateStatusDto = statusUpdateDtoSchema.parse(req.body);
      const updatedCount =
        await this.service.updateUsersStatus(updateStatusDto);
      res.status(200).send(updatedCount);
    } catch (error) {
      next(error);
    }
  };

  updateUsersType = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const typeUpdateDto = typeUpdateDtoSchema.parse(req.body);
      const updatedCount = await this.service.updateUsersType(typeUpdateDto);
      res.status(200).send(updatedCount);
    } catch (error) {
      next(error);
    }
  };
}

export const userController = new UsersController(usersService);
