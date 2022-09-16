import { Test } from "@prisma/client";

export interface IInsertTestData extends Omit<Test, "id" | "createdAt"> {}
