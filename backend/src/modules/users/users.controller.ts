import type { NextFunction, Request, Response } from "express";
import { UsersService, usersService } from "./users.service.js";
import jwt from "jsonwebtoken";
import { AuthError } from "../../shared/errors/AuthError.js";
import { decodedTokenSchema } from "./schema/decodedTokenSchema.js";

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
    const users = await usersService.getUsers();
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
