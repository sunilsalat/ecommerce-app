import { app } from "../app";
import userRoute from "./userRoute";

export const loadRoute = () => {
    app.use("/api/v1/user", userRoute);
};
