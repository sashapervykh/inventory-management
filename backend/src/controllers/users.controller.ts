import type { Request, Response } from "express";
import { usersService } from "../services/users.service.js";
import jwt from "jsonwebtoken";

class UsersController {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await usersService.createUser(name, email);
    res.status(200).send(user);
  }

  async getUser(req: Request, res: Response) {
    const token = req.cookies.auth;
    const userInfo = jwt.decode(token);
    const user = await usersService.getUser(userInfo.user);
    res.status(200).send(user);
  }
}

export const userController = new UsersController();
