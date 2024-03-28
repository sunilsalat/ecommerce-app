import express, { Request, Response } from "express";
import { cmnMethod } from "../service/common";
import { CheckAuth, IsAllowed } from "../middlewares/checkAuth";
import { User } from "../models/User";

const router = express.Router();

router.post("/login", async (req: Request, res: Response) => {
    const { name, email, role } = req.body;
    const obj = await User.create({ name, email, role });
    if (obj) {
        cmnMethod.attachCookieToResponse(res, { name, role, email });
    }
    return res.status(200).json({ data: obj });
});

router.post(
    "/cr",
    [CheckAuth, IsAllowed(["admin"])],
    async (req: Request, res: Response) => {
        return res.status(200).json({ data: true });
    }
);

router.post(
    "/li",
    [CheckAuth, IsAllowed(["admin"])],
    async (req: Request, res: Response) => {
        const obj = await User.find();
        return res.status(200).json({ data: obj });
    }
);

export default router;
