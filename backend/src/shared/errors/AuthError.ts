import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class AuthError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.AUTH_FAIL, STATUS_CODES.UNAUTHORIZED);
  }
}
