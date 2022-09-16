import { Request, Response } from "express";
import { IInsertTestData } from "../interfaces/testInterfaces";
import { testService } from "../services";

export async function create(req: Request, res: Response) {
  const newTest: IInsertTestData = req.body;
  await testService.insert(newTest);
  res.sendStatus(201);
}
