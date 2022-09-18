import { Request, Response } from "express";
import { IRequestTestData } from "../interfaces/testInterfaces";
import { testService } from "../services";

export async function create(req: Request, res: Response) {
  const newTest: IRequestTestData = req.body;
  await testService.insert(newTest);
  res.sendStatus(201);
}
