import { Test } from "@prisma/client";

export interface IRequestTestData
  extends Omit<Test, "id" | "createdAt" | "teacherDisciplineId"> {
  teacherId: number;
  disciplineId: number;
}

export interface IInsertTestData extends Omit<Test, "id" | "createdAt"> {}
