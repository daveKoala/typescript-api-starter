"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errors_1 = __importDefault(require("../lib/errors"));
exports.errorHandler = (err, req, res, next) => {
    if (err instanceof errors_1.default.BaseError) {
        if (err.message) {
            // @ts-ignore
            err.info.message = err.message;
        }
        // @ts-ignore
        res.status(err.statusCode).json(err.info);
    }
    else {
        // @ts-ignore
        const internalServerError = new errors_1.default.InternalServerError();
        if (err.message) {
            // @ts-ignore
            internalServerError.info.message = err.message;
        }
        // @ts-ignore
        res.status(internalServerError.statusCode).json({ data: internalServerError.info });
    }
};
//# sourceMappingURL=errorHandler.js.map