import { Request, Response, NextFunction } from 'express';
import errors from '../errors';

const versionRouter = (versionsMap = new Map(), options = new Map()) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      for (const [key, routerMethod] of versionsMap) {
        if (key === req.version) {
          return routerMethod(req, res, next);
        }
      }
      throw new errors.APIInvalidHeader('Missing or invalid api version');
    } catch (error) {
      next(error);
    }
  };
};

export default versionRouter;
