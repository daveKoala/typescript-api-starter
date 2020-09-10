import express, { Request, Response, NextFunction } from 'express';
import versionRouter from '../../lib/versionRouter';
import middleware from '../../middleware';

export const helloRouter = express.Router();

const hiMap = new Map();

hiMap.set('apple', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'GET: version apple' });
});

hiMap.set('orange', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'GET: version orange' });
});

helloRouter.get('/', versionRouter(hiMap));

const byeMap = new Map();

byeMap.set('apple', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'POST: version apple' });
});

byeMap.set('orange', (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'POST: version orange' });
});
helloRouter.post('/bye', middleware.authentication, middleware.authorization('a role'), versionRouter(byeMap));
