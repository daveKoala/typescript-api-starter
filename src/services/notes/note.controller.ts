import { Request, Response, NextFunction } from 'express';
import errors from '../../lib/errors';

export const fetchAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    throw new errors.ForbiddenError()
    // return res.status(200).json({ message: 'GET: version ORANGE' });
  } catch (error) {
    next(error);
  }
};