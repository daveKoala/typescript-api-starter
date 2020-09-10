import express, { Request, Response, NextFunction } from 'express';
import versionRouter from '../../lib/versionRouter';
import middleware from '../../middleware';

export const helloRouter = express.Router();

const routeMap = new Map();

routeMap.set('apple', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'GET: version apple' });
});

routeMap.set('orange', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'GET: version orange' });
});

helloRouter.get('/', versionRouter(routeMap));

const routeMap2 = new Map();

routeMap2.set('apple', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'POST: version apple' });
});

routeMap2.set('orange', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'POST: version orange' });
});
helloRouter.post('/bye', middleware.authentication, middleware.authorization('a role'), versionRouter(routeMap2));
