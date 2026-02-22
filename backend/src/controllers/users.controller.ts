import type { NextFunction, Request, Response } from "express";
import { usersService } from "../services/users.service.js";
import jwt from "jsonwebtoken";
import { AuthError } from "../errors/AuthError.js";

class UsersController {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await usersService.createUser(name, email);
    res.status(200).send(user);
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies.auth;
      const userInfo = jwt.decode(token);
      if (!userInfo) throw new AuthError();
      const user = await usersService.getUser(userInfo.user);
      res.status(200).send(user);
    } catch (error) {
      next(error);
    }
  }
}

export const userController = new UsersController();
