"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseError extends Error {
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, BaseError.prototype);
        this.name = this.constructor.name;
        this.message = message;
        if (Error.captureStackTrace) {
            // @ts-ignore
            Error.captureStackTrace(this, this.constructor.name);
        }
        else {
            this.stack = new Error(message).stack;
        }
    }
}
exports.default = BaseError;
//# sourceMappingURL=baseError.js.map