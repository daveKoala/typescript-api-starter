"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
const express_1 = __importDefault(require("express"));
const versionRouter_1 = __importDefault(require("../../lib/versionRouter"));
const middleware_1 = __importDefault(require("../../middleware"));
exports.helloRouter = express_1.default.Router();
const routeMap = new Map();
routeMap.set('apple', (req, res, next) => {
    return res.status(200).json({ message: 'GET: version apple' });
});
routeMap.set('orange', (req, res, next) => {
    return res.status(200).json({ message: 'GET: version orange' });
});
exports.helloRouter.get('/', versionRouter_1.default(routeMap));
const routeMap2 = new Map();
routeMap2.set('apple', (req, res, next) => {
    return res.status(200).json({ message: 'POST: version apple' });
});
routeMap2.set('orange', (req, res, next) => {
    return res.status(200).json({ message: 'POST: version orange' });
});
exports.helloRouter.post('/bye', middleware_1.default.authentication, middleware_1.default.authorization('a role'), versionRouter_1.default(routeMap2));
//# sourceMappingURL=hello.router.js.map