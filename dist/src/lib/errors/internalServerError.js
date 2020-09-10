"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = __importDefault(require("./baseError"));
const errorMessages_1 = require("../../config/errorMessages");
class InternalServerError extends baseError_1.default {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, InternalServerError.prototype);
        // @ts-ignore
        this.info = errorMessages_1.errors.internalServerError;
        // @ts-ignore
        this.statusCode = 500;
    }
}
exports.default = InternalServerError;
//# sourceMappingURL=internalServerError.js.map