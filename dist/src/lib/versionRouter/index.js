"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const versionRouter = (versionsMap = new Map(), options = new Map()) => {
    return (req, res, next) => {
        try {
            for (const [key, routerMethod] of versionsMap) {
                if (key === req.version) {
                    return routerMethod(req, res, next);
                }
            }
            res.status(200).json({ woa: 'cowboy' });
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = versionRouter;
