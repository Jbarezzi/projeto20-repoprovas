import { Request, Response } from "express";
import { ISign } from "../interfaces/authTypes";
import { authService } from "../services";

export async function signup(req: Request, res: Response) {
  const newUser: ISign = req.body;
  await authService.signup(newUser);
  res.sendStatus(201);
}
