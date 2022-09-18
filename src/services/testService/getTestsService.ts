import { testRepository } from "../../repositories";

export async function groupTestsByDiscipline() {
  const tests = await testRepository.getTestsGroupedByDiscipline();
  return tests;
}

export async function groupTestsByTeacher() {
  const tests = await testRepository.getTestsGroupedByTeacher();
  return tests;
}
