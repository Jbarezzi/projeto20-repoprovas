import Joi from "joi";

export const signup = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
  confirmPassword: Joi.string().trim().required(),
});

export const signin = Joi.object({
  email: Joi.string().email().trim().required(),
  password: Joi.string().trim().required(),
});
