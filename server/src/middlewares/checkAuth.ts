import { NextFunction, Request, Response } from "express";
import { cmnMethod } from "../service/common";
import { BadRequest } from "../errors/badRequest";
import { NotAuthorize } from "../errors/notAuthorize";

export const CheckAuth = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { access_token, refresh_token } = req.signedCookies;
        if (!refresh_token) {
            throw new BadRequest("Bad request, Please sign in to access site");
        }
        const decoded = cmnMethod.verifyCookie(access_token);
        req.user = decoded;
        next();
        console.log("asf2");
    } catch (error) {
        throw error;
    }
};

export const IsAllowed = (roles: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { name, role } = req.user;

        if (!name) {
            throw new BadRequest("Not allowed");
        }
        if (!roles.includes(role)) {
            throw new NotAuthorize("You dont have permission to access page");
        }
        next();
    };
};
