"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
const express_1 = __importDefault(require("express"));
const versionRouter_1 = __importDefault(require("../../lib/versionRouter"));
exports.helloRouter = express_1.default.Router();
const routeMap = new Map();
routeMap.set('apple', (req, res, next) => {
    return res.status(200).json({ message: 'hello to you version apple' });
});
routeMap.set('orange', (req, res, next) => {
    return res.status(200).json({ message: 'hello to you version orange' });
});
exports.helloRouter.get('/', versionRouter_1.default(routeMap));
