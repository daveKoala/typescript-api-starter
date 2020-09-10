import BaseError from "./baseError";
import { errors } from "../../config/errorMessages";

class InternalServerError extends BaseError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, InternalServerError.prototype);
    // @ts-ignore
    this.info = errors.internalServerError;
    // @ts-ignore
    this.statusCode = 500;
  }
}

export default InternalServerError;
