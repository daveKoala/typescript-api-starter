import { Request, Response, NextFunction } from 'express';
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
    return res.status(200).json({ notes: mockNotes(2) });
  } catch (error) {
    next(error);
  }
};