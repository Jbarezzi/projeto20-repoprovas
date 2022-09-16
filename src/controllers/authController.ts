import { Request, Response } from "express";
import { ISign } from "../interfaces/authInterfaces";
import { authService } from "../services";

export async function signup(req: Request, res: Response) {
  const newUser: ISign = req.body;
  await authService.signup(newUser);
  res.sendStatus(201);
}

export async function signin(req: Request, res: Response) {
  const user: ISign = req.body;
  const token: string = await authService.signin(user);
  res.status(200).send(token);
}
