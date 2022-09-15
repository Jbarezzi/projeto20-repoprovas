import Joi from "joi";

export const signupSchema = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
  confirmPassword: Joi.string().trim().required(),
});
