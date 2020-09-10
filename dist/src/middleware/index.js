"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = require("./errorHandler");
const setAPIVersion_1 = require("./setAPIVersion");
const authentication_1 = require("./auth/authentication");
const authorization_1 = require("./auth/authorization");
exports.default = {
    authentication: authentication_1.authentication,
    authorization: authorization_1.authorization,
    errorHandler: errorHandler_1.errorHandler,
    setAPIVersion: setAPIVersion_1.setAPIVersion,
};
//# sourceMappingURL=index.js.map