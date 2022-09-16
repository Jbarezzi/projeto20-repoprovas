import { Router } from "express";
import { validateSchemaMiddleware } from "../middlewares";
import { authSchemas } from "../schemas";
import { authController } from "./../controllers";

export const authRouter = Router();

authRouter.post(
  "/signup",
  validateSchemaMiddleware(authSchemas.signupSchema),
  authController.signup
);
authRouter.post(
  "/signin",
  validateSchemaMiddleware(authSchemas.signinSchema),
  authController.signin
);
