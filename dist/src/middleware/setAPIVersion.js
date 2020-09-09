"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAPIVersion = void 0;
exports.setAPIVersion = (req, res, next) => {
    if (req && req.headers) {
        if (req.header('accept-version')) {
            req.version = req.header('accept-version');
        }
    }
    next();
};
