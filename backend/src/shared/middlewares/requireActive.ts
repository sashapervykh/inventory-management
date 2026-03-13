import { type NextFunction, type Request, type Response } from "express";
import { AuthError } from "../errors/AuthError.js";
import { BlockedError } from "../errors/BlockedError.js";

export async function requireActive(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const user = req.user;
    if (!user) {
      throw new AuthError();
    }
    if (user.status === "blocked") {
      throw new BlockedError();
    }
  } catch (error) {
    next(error);
  }
}
