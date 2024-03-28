import jwt from "jsonwebtoken";

class Common {
    attachCookieToResponse(res: any, payload: any, refreshKey?: any) {
        const accessToken = jwt.sign(payload, "abcd", { expiresIn: "1d" });

        const refreshToken = jwt.sign({ payload, ...refreshKey }, "abcd", {
            expiresIn: "7d",
        });

        res.cookie("access_token", accessToken, {
            signed: true,
            httpOnly: true,
        });

        res.cookie("refresh_token", refreshToken, {
            signed: true,
            httpOnly: true,
        });
    }

    verifyCookie(cookie: string) {
        return jwt.verify(cookie, "abcd");
    }
}

export const cmnMethod = new Common();
