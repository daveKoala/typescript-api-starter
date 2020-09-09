import express, { Request, Response, NextFunction } from 'express';
import versionRouter from '../../lib/versionRouter';
export const helloRouter = express.Router();

const routeMap = new Map();

routeMap.set('apple', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'hello to you version apple' });
});

routeMap.set('orange', (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({ message: 'hello to you version orange' });
});

helloRouter.get('/', versionRouter(routeMap));
