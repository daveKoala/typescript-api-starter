"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorization = void 0;
exports.authorization = (role) => {
    return (req, res, next) => {
        console.log('authorization role:', role);
        next();
    };
};
//# sourceMappingURL=authorization.js.map