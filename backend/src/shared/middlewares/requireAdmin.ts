import { type NextFunction, type Request, type Response } from "express";
import { AuthError } from "../errors/AuthError.js";
import { AdminOnlyError } from "../errors/AdminOnlyError.js";

export async function requireAdmin(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const user = req.user;
    if (!user) {
      throw new AuthError();
    }
    if (user.type !== "admin") {
      throw new AdminOnlyError();
    }
    next();
  } catch (error) {
    next(error);
  }
}
