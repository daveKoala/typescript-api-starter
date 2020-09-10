"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = __importDefault(require("./baseError"));
const errorMessages_1 = require("../../config/errorMessages");
class ForbiddenError extends baseError_1.default {
    constructor(message) {
        super(message);
        // @ts-ignore
        this.info = errorMessages_1.errors.forbidden;
        // @ts-ignore
        this.statusCode = 400;
    }
}
exports.default = ForbiddenError;
//# sourceMappingURL=forbiddenError.js.map