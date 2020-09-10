import express, { Request, Response, NextFunction } from 'express';
import versionRouter from '../../lib/versionRouter';
import middleware from '../../middleware';

import * as Apple from './hello.controller';
import * as Orange from './helloV2.controller';

export const helloRouter = express.Router();

const hiMap = new Map().set('apple', Apple.myController).set('orange', Orange.myController);

helloRouter.get('/', versionRouter(hiMap));

const byeMap = new Map().set('apple', Apple.myPOSTcontroller).set('orange', Orange.myPOSTcontroller);

helloRouter.post('/bye', middleware.authentication, middleware.authorization('a role'), versionRouter(byeMap));
