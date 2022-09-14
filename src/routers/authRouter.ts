import { Router } from "express";
import { joiValidator } from "../middlewares";
import { signupSchema } from "../schemas";
import { authController } from "./../controllers";

export const authRouter = Router();

authRouter.post("/signup", joiValidator(signupSchema), authController.signup);
