import { Router } from "express";
import { testController } from "../controllers";
import {
  validateSchemaMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import { testSchemas } from "../schemas";

export const testRouter = Router();

testRouter.post(
  "/test",
  validateTokenMiddleware,
  validateSchemaMiddleware(testSchemas.insertTest),
  testController.create
);
testRouter.get(
  "/tests-discipline",
  validateTokenMiddleware,
  testController.groupTestsByDiscipline
);
testRouter.get(
  "/tests-teacher",
  validateTokenMiddleware,
  testController.groupTestsByTeacher
);
