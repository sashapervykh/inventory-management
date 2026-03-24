import { STATUS_CODES } from "../constants/statusCodes.js";
import { AppError } from "./AppError.js";

export class SalesforceError extends AppError {
  constructor(message: string) {
    super(message, STATUS_CODES.BAD_REQUEST);
  }
}
