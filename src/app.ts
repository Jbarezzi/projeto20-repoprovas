import "./config/config";
import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routers";
import { errorHandlerMiddleware } from "./middlewares";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);

export default app;
