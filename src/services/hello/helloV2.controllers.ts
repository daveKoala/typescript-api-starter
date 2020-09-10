import express, { Request, Response, NextFunction } from 'express';

export const myController = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'GET: version ORANGE' });
};

export const myPOSTcontroller = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({ message: 'POST: version ORANGE' });
};
