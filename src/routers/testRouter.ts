import { Router } from "express";
import { testController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";

export const testRouter = Router();

testRouter.post("/test", validateSchemaMiddleware, testController.create);
