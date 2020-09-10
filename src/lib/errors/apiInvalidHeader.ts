import BaseError from "./baseError";
import { errors } from "../../config/errorMessages";

class APIInvalidHeader extends BaseError {
  constructor(message: string) {
    super(message);
    // @ts-ignore
    this.info = errors.apiInvalid;
    // @ts-ignore
    this.statusCode = 400;
  }
}


export default APIInvalidHeader;