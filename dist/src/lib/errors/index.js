"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = __importDefault(require("./baseError"));
const internalServerError_1 = __importDefault(require("./internalServerError"));
const apiInvalidHeader_1 = __importDefault(require("./apiInvalidHeader"));
const notFoundError_1 = __importDefault(require("./notFoundError"));
const forbiddenError_1 = __importDefault(require("./forbiddenError"));
exports.default = {
    APIInvalidHeader: apiInvalidHeader_1.default,
    BaseError: baseError_1.default,
    ForbiddenError: forbiddenError_1.default,
    InternalServerError: internalServerError_1.default,
    NotFoundError: notFoundError_1.default,
};
//# sourceMappingURL=index.js.map