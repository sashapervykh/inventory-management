import type { Request, Response } from "express";
import { usersService } from "../services/users.service.js";

class UsersController {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;
    const user = await usersService.createUser(name, email);
    res.status(200).send(user);
  }
}

export const userController = new UsersController();
