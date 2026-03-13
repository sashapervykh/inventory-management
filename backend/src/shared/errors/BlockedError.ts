import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class BlockedError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.USER_BLOCKED, STATUS_CODES.FORBIDDEN);
  }
}
