'use strict';
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const app_1 = __importDefault(require('./app'));
console.log('hello world');
const server = app_1.default.listen(app_1.default.get('port'), () => {
    console.group();
    console.log(
        '  App is running at http://localhost:%d in %s mode',
        app_1.default.get('port'),
        app_1.default.get('env'),
    );
    console.groupEnd();
});
exports.default = server;
