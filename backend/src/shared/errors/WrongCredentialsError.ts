import { ERROR_MESSAGES } from "../constants/errorMessages.js";
import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class WrongCredentialsError extends AppError {
  constructor() {
    super(ERROR_MESSAGES.WRONG_CREDENTIALS, STATUS_CODES.UNAUTHORIZED);
  }
}
