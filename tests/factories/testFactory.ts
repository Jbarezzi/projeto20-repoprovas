export function __createTest() {
  const test = {
    name: "Prova",
    pdfUrl: "https://www.google.com.br",
    categoryId: 1,
    teacherId: 1,
    disciplineId: 1,
  };
  return test;
}

export function __createInvalidTest() {
  const test = {
    name: 4,
    pdfUrl: "google",
    categoryId: 1,
    teacherId: 1,
    disciplineId: 1,
  };
  return test;
}

export function __createTestWithoutDiscipline() {
  const test = {
    name: "Prova",
    pdfUrl: "https://www.google.com.br",
    categoryId: 1,
    teacherId: 3,
    disciplineId: 1,
  };
  return test;
}
