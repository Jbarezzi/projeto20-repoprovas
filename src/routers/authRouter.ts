import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares";
import { authSchemas } from "../schemas";
import { authController } from "./../controllers";

export const authRouter = Router();

authRouter.post(
  "/signup",
  validateSchemaMiddleware(authSchemas.signup),
  authController.signup
);
authRouter.post(
  "/signin",
  validateSchemaMiddleware(authSchemas.signin),
  authController.signin
);
