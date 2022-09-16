import { Router } from "express";
import { joiValidator } from "../middlewares";
import { authSchemas } from "../schemas";
import { authController } from "./../controllers";

export const authRouter = Router();

authRouter.post(
  "/signup",
  joiValidator(authSchemas.signupSchema),
  authController.signup
);
authRouter.post(
  "/signin",
  joiValidator(authSchemas.signinSchema),
  authController.signin
);
