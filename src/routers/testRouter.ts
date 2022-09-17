import { Router } from "express";
import { testController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { testSchemas } from "../schemas";

export const testRouter = Router();

testRouter.post(
  "/test",
  validateSchemaMiddleware(testSchemas.insertTest),
  testController.create
);
