import express from 'express';
import versionRouter from '../../lib/versionRouter';
import middleware from '../../middleware';
import * as Note from './note.controller';

export const noteRouter = express.Router();

const allMap = new Map().set('apple', Note.fetchAll).set('orange', Note.fetchAFew);
noteRouter.get('/all', middleware.authentication, middleware.authorization('a role ALL'), versionRouter(allMap));

const getMap = new Map().set('apple', Note.fetchById).set('orange', Note.fetchById);
noteRouter.get('/:id', middleware.authentication, middleware.authorization('a role GET'), versionRouter(getMap));

const deleteMap = new Map().set('apple', Note.deleteById).set('orange', Note.deleteById);
noteRouter.delete('/:id', middleware.authentication, middleware.authorization('a role DELETE'), versionRouter(deleteMap));

const putMap = new Map().set('apple', Note.updateNote).set('orange', Note.updateNote);
noteRouter.put('/:id', middleware.authentication, middleware.authorization('a role PUT'), versionRouter(putMap));
