"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const hello_router_1 = require("./services/hello/hello.router");
// Routers
app_1.default.use('/hi', hello_router_1.helloRouter);
app_1.default.use('*', (req, res, next) => {
    res.statusMessage = 'Not found';
    res.status(404).json({ url: req.originalUrl });
});
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.clear();
    console.group();
    console.log('App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
    console.groupEnd();
});
exports.default = server;
