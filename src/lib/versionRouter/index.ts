import { Request, Response, NextFunction } from 'express';

const versionRouter = (versionsMap = new Map(), options = new Map()) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      for (const [key, routerMethod] of versionsMap) {
        if (key === req.version) {
          return routerMethod(req, res, next);
        }
      }
      res.status(200).json({ woa: 'cowboy' });
    } catch (error) {
      next(error);
    }
  };
};

export default versionRouter;
