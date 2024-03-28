import express, { Request, Response } from "express";

const router = express.Router();

router.post("/cr", async (req: Request, res: Response) => {
    return res.status(200).json({ message: true });
});

export default router;
