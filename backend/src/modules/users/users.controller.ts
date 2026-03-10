import type { NextFunction, Request, Response } from "express";
import { UsersService, usersService } from "./users.service.js";
import jwt from "jsonwebtoken";
import { decodedTokenSchema } from "./schema/decodedTokenSchema.js";
import { getTypedSearch } from "./utils/getTypedSearch.js";
import { getTypedLimit } from "./utils/getTypedLimit.js";
import { AuthError } from "../../shared/errors/AuthError.js";

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
}

export const userController = new UsersController(usersService);
