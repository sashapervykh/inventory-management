import { type Request, type Response, type NextFunction } from "express";
import { AppError } from "../errors/AppError.js";
import { STATUS_CODES } from "../constants/statusCodes.js";

export function handleErrors(
  error: Error | AppError,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error instanceof AppError) {
    console.error("App error:", error);
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }
  console.error("Unexpected error:", error);
  res.status(STATUS_CODES.INTERNAL_ERROR).json({
    message: "Internal server error",
  });
}
