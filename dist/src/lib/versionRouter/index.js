"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = __importDefault(require("../errors"));
const versionRouter = (versionsMap = new Map(), options = new Map()) => {
    return (req, res, next) => {
        try {
            for (const [key, routerMethod] of versionsMap) {
                if (key === req.version) {
                    return routerMethod(req, res, next);
                }
            }
            throw new errors_1.default.APIInvalidHeader('Missing or invalid api version');
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = versionRouter;
//# sourceMappingURL=index.js.map