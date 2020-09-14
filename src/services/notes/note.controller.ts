import { Request, Response, NextFunction } from 'express';
import errors from '../../lib/errors';
import mockNotes from './mockNotes';

export const fetchAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ notes: mockNotes(100) });
  } catch (error) {
    next(error);
  }
};

export const fetchAFew = (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ results: mockNotes(2) });
  } catch (error) {
    next(error);
  }
};

export const fetchById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const _id = req.params.id || null;
    if (_id === 'xxxx') {
      throw new errors.NotFoundError(`Document with an ID: "${_id}" is not found`);
    } else {
      return res.status(200).json({ results: { ...mockNotes(2)[0], _id } });
    }
  } catch (error) {
    next(error);
  }
};
