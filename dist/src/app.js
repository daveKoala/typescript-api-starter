"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.set('port', process.env.PORT || 3000);
app.use(body_parser_1.default.json()).use(helmet_1.default()).use(cors_1.default());
app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.default = app;
