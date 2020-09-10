"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const hello_router_1 = require("./services/hello/hello.router");
const middleware_1 = __importDefault(require("./middleware"));
const errors_1 = __importDefault(require("./lib/errors"));
// Routers
app_1.default.use('/hi', hello_router_1.helloRouter);
app_1.default
    .use('*', (req, res, next) => {
    next(new errors_1.default.NotFoundError('Not found'));
})
    .use(middleware_1.default.errorHandler);
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.group();
    console.log('App is running at http://localhost:%d in %s mode', app_1.default.get('port'), app_1.default.get('env'));
    console.groupEnd();
});
exports.default = server;
//# sourceMappingURL=server.js.map