import { Request, Response, NextFunction } from "express";
import { BaseError } from "../errors/baseError";

export const ErrorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof BaseError) {
        return res.status(err.statusCode).json({ error: err.serializeError() });
    }

    return res.status(500).json({ error: err.message });
};
