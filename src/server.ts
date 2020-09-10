import app from './app';
import { helloRouter } from './services/hello/hello.router';
import {pingzRouter} from "./services/pingz/pingz.router"
import { Request, Response, NextFunction } from 'express';
import middleware from './middleware';
import errors from './lib/errors';

// Routers
app
.use('/hi', helloRouter)
.use("/pingz", pingzRouter);

app
  .use('*', (req: Request, res: Response, next: NextFunction) => {
    next(new errors.NotFoundError('Not found'));
  })
  .use(middleware.errorHandler);

const server = app.listen(app.get('port'), () => {
  console.group();
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.groupEnd();
});

export default server;
