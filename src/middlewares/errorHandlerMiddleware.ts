import { NextFunction, Request, Response } from "express";

export function errorHandlerMiddleware(
  error: ErrorEvent,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  if (error.type === "error_unprocessable_entity")
    return res.status(422).send({ message: error.message });

  if (error.type === "error_not_found")
    return res.status(404).send({ message: error.message });

  if (error.type === "error_conflict")
    return res.status(409).send({ message: error.message });

  if (error.type === "error_unauthorized")
    return res.status(401).send({ message: error.message });

  if (error.type === "error_forbidden")
    return res.status(403).send({ message: error.message });

  res.sendStatus(500);
}
