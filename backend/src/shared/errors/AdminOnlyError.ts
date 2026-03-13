import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class AdminOnlyError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.ADMIN_ONLY, STATUS_CODES.FORBIDDEN);
  }
}
