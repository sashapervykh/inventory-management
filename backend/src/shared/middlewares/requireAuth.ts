import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { AuthError } from "../errors/AuthError.js";
import { ENV } from "../constants/env.js";
import { userIdSchema } from "../schemas/userIdSchema.js";
import { usersRepository } from "../../modules/users/users.repository.js";

export async function requireAuth(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const token = extractToken(req);
    const id = extractIdFromToken(token);
    const user = await usersRepository.findById(id);
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

function extractToken(req: Request) {
  const accessToken = req.cookies.auth;
  if (!accessToken || typeof accessToken !== "string") {
    throw new AuthError();
  }
  return accessToken;
}

function extractIdFromToken(token: string) {
  try {
    const payload = jwt.verify(token, ENV.JWT_SECRET);
    const id = getTypedId(payload);
    return id;
  } catch {
    throw new AuthError();
  }
}

function getTypedId(payload: jwt.JwtPayload | string) {
  try {
    const typedPayload = userIdSchema.parse(payload);
    return typedPayload.userId;
  } catch {
    throw new AuthError();
  }
}
