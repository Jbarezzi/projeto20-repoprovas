import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routers";
import { errorHandler } from "./middlewares";

dotenv.config();
const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

export default app;
