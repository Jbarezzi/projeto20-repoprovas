import * as jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import { errorFactory } from "../utils";

export async function validateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { authorization } = req.headers;
  if (authorization === undefined) {
    throw errorFactory.unauthorized("token");
  }
  const token = authorization?.replace("Bearer ", "");
  const JWT_SECRET = process.env.TOKEN_SECRET!;
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error !== null) {
      throw errorFactory.unauthorized("valid token");
    }
    res.locals.payload = payload;
    next();
  });
}
