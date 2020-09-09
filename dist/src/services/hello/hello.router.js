"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.helloRouter = express_1.default.Router();
exports.helloRouter.get("/", (req, res, next) => {
    try {
        return res.status(200).json({ hello: "worldmmm,m,m,m" });
    }
    catch (error) {
        next(error);
    }
});
