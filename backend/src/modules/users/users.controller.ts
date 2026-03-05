import type { NextFunction, Request, Response } from "express";
import { UsersService, usersService } from "./users.service.js";
import jwt from "jsonwebtoken";
import { decodedTokenSchema } from "./schema/decodedTokenSchema.js";
import { getTypedSearch } from "./utils/getTypedSearch.js";
import { getTypedLimit } from "./utils/getTypedLimit.js";

class UsersController {
  service: UsersService;
  constructor(service: UsersService) {
    this.service = service;
  }

  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await usersService.createUser(name, email);
    res.status(200).send(user);
  }

  getUsers = async (req: Request, res: Response) => {
    const search = getTypedSearch(req);
    const limit = getTypedLimit(req);
    const users = await usersService.getUsers(search, limit);
    res.status(200).send(users);
  };

  async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.auth;
      const userInfo = decodedTokenSchema.parse(jwt.decode(token));
      const user = await usersService.findById(userInfo.userId);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UsersController(usersService);
