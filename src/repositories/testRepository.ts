import { prisma } from "@prisma/client";
import client from "../database/prisma";
import {
  IInsertTestData,
  IRequestTestData,
} from "../interfaces/testInterfaces";

export async function insert(newTest: IRequestTestData, id: number) {
  const test: IInsertTestData = {
    name: newTest.name,
    pdfUrl: newTest.pdfUrl,
    categoryId: newTest.categoryId,
    teacherDisciplineId: id,
  };
  await client.test.create({ data: test });
}

export async function getCategoryById(id: number) {
  const category = await client.category.findUnique({ where: { id } });
  return category;
}

export async function getDisciplineById(id: number) {
  const discipline = await client.discipline.findUnique({ where: { id } });
  return discipline;
}

export async function getTeacherById(id: number) {
  const teacher = await client.teacher.findUnique({ where: { id } });
  return teacher;
}

export async function getTeacherDisciplinesByIds(
  disciplineId: number,
  teacherId: number
) {
  const teacherDisciplines = await client.teacherDiscipline.findFirst({
    where: { disciplineId, teacherId },
  });
  return teacherDisciplines;
}

export async function getTestsGroupedByDiscipline() {
  const tests = client.term.findMany({
    distinct: ["id"],
    select: {
      number: true,
      Discipline: {
        distinct: ["name"],
        select: {
          name: true,
          TeacherDiscipline: {
            select: {
              Teacher: { select: { name: true } },
              Test: {
                distinct: ["categoryId"],
                select: {
                  Category: {
                    include: {
                      Test: { select: { id: true, name: true, pdfUrl: true } },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return tests;
}

export async function getTestsGroupedByTeacher() {
  const tests = await client.teacher.findMany({
    distinct: ["id"],
    select: {
      name: true,
      TeacherDiscipline: {
        select: {
          Test: {
            select: {
              id: true,
              name: true,
              pdfUrl: true,
              TeacherDiscipline: {
                select: {
                  Discipline: {
                    select: { name: true },
                  },
                },
              },
            },
          },
        },
      },
    },
  });
  return tests;
}
