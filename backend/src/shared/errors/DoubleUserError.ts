import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class DoubleUserError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.DOUBLE_USER, STATUS_CODES.CONFLICT);
  }
}
