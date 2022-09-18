import { IRequestTestData } from "../../interfaces/testInterfaces";
import { testRepository } from "../../repositories";
import { errorFactory } from "../../utils";

export async function insert(newTest: IRequestTestData) {
  await verifyIfCategoryExists(newTest.categoryId);
  await verifyIfDisciplineExists(newTest.disciplineId);
  await verifyIfTeacherExists(newTest.teacherId);
  const id = await verifyIfRelationTeacherDisciplinesExists(
    newTest.disciplineId,
    newTest.teacherId
  );
  await testRepository.insert(newTest, id);
}

async function verifyIfCategoryExists(categoryId: number) {
  const category = await testRepository.getCategoryById(categoryId);
  if (category === null) throw errorFactory.notFound("Category");
}

async function verifyIfDisciplineExists(disciplineId: number) {
  const discipline = await testRepository.getDisciplineById(disciplineId);
  if (discipline === null) throw errorFactory.notFound("Discipline");
}

async function verifyIfTeacherExists(teacherId: number) {
  const teacher = await testRepository.getTeacherById(teacherId);
  if (teacher === null) throw errorFactory.notFound("Teacher");
}

async function verifyIfRelationTeacherDisciplinesExists(
  disciplineId: number,
  teacherId: number
) {
  const teacherDiscipline = await testRepository.getTeacherDisciplinesByIds(
    disciplineId,
    teacherId
  );
  if (teacherDiscipline === null)
    throw errorFactory.notFound("Teacher/Discipline relation");
  return teacherDiscipline.id;
}
