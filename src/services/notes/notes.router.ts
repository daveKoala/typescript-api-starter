import express from 'express';
import versionRouter from '../../lib/versionRouter';
import middleware from '../../middleware';
import { fetchAll, fetchAFew } from './note.controller';

export const noteRouter = express.Router();

const noteMap = new Map().set('apple', fetchAll).set('orange', fetchAFew);

noteRouter.get('/all', middleware.authentication, middleware.authorization('a role'), versionRouter(noteMap));
