import express from 'express';
import versionRouter from '../../lib/versionRouter';
import middleware from '../../middleware';
import { fetchAll, fetchAFew, fetchById } from './note.controller';

export const noteRouter = express.Router();

const noteMap = new Map().set('apple', fetchAll).set('orange', fetchAFew);
noteRouter.get('/all', middleware.authentication, middleware.authorization('a role'), versionRouter(noteMap));

const noteByIDMap = new Map().set('apple', fetchById).set('orange', fetchById);
noteRouter.get('/:id', middleware.authentication, middleware.authorization('a role'), versionRouter(noteByIDMap));
