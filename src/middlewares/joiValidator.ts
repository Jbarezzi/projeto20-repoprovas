import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";
import { errorFactory } from "../utils";

export const joiValidator = (schema: Schema) => {
  return (req: Request, _res: Response, next: NextFunction) => {
    const body: object = req.body;
    const { error } = schema.validate(body, { abortEarly: false });
    if (error !== undefined) {
      const messages: string[] = error?.details.map((detail) => detail.message);
      throw errorFactory.unprocessableEntity(messages);
    }
    next();
  };
};
