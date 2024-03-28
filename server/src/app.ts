require("express-async-errors");
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { ErrorHandler } from "./middlewares/errorHandler";
import { NotFound } from "./middlewares/notFound";
import { loadRoute } from "./routes/loadRoutes";
const app = express();
app.use(cookieParser("abcd1234"));
app.use(express.json());
app.use(cors());

loadRoute();

app.use(ErrorHandler);
app.use(NotFound);

export { app };
