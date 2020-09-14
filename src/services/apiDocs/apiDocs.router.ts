import swaggerUI from 'swagger-ui-express';
import express, { Request, Response, NextFunction } from 'express';
import { swaggerDocument as v1 } from './swaggerDocs/Apple';
import { swaggerDocument as v2 } from './swaggerDocs/Banana';

export const apiDocsRouter = express.Router();

apiDocsRouter.get('/apple', (req: Request, res: Response, next: NextFunction) => res.status(200).json(v1));
apiDocsRouter.get('/banana', (req: Request, res: Response, next: NextFunction) => res.status(200).json(v2));

apiDocsRouter.use('/', swaggerUI.serve, (req: Request, res: Response, next: NextFunction) => {
  try {
    const options: swaggerUI.SwaggerOptions = {
      explorer: true,
      openapi: '3.0.1',
      swaggerOptions: {
        urls: [
          {
            url: 'http://localhost:3000/api-docs/apple',
            name: 'Apple',
          },
          {
            url: 'http://localhost:3000/api-docs/banana',
            name: 'Banana',
          },
        ],
      },
    };
    // @ts-ignore
    return swaggerUI.setup(null, options)(req, res, next);
  } catch (error) {
    next(error);
  }
});
