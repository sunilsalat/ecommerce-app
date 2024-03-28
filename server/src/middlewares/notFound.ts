import { NextFunction, Request, Response } from "express";

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
    return res.status(404).json({ msg: "Page your are looking for not found" });
};
