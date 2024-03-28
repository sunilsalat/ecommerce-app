import { app } from "./app";
import mongoose from "mongoose";

declare global {
    namespace Express {
        interface Request {
            user?: any;
        }
    }
}

const start = async () => {
    try {
        mongoose.connect("mongodb://localhost:27017/practice");
        console.log(`Db connected`);

        app.listen(8080, () => {
            console.log(`App running on 8080..`);
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();
