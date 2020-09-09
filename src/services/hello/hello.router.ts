import express, { Request, Response, NextFunction } from "express";
import { setAPIVersion } from "../../middleware/setAPIVersion";
export const helloRouter = express.Router();

helloRouter.get("/", setAPIVersion, (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.status(200).json({ hello: "worldmmm,m,m,m", api: req.version });
  } catch (error) {
    next(error);
  }
})