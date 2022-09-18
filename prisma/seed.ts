import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function main() {
  await client.$executeRaw`TRUNCATE TABLE users RESTART IDENTITY CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE categories RESTART IDENTITY CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE disciplines RESTART IDENTITY CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE teachers RESTART IDENTITY CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE terms RESTART IDENTITY CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE "teachersDisciplines" RESTART IDENTITY CASCADE`;
  await client.$executeRaw`TRUNCATE TABLE tests RESTART IDENTITY CASCADE;`;

  await client.$executeRaw`INSERT INTO terms ("number") VALUES (1);`;
  await client.$executeRaw`INSERT INTO terms ("number") VALUES (2);`;
  await client.$executeRaw`INSERT INTO terms ("number") VALUES (3);`;
  await client.$executeRaw`INSERT INTO terms ("number") VALUES (4);`;
  await client.$executeRaw`INSERT INTO terms ("number") VALUES (5);`;
  await client.$executeRaw`INSERT INTO terms ("number") VALUES (6);`;

  await client.$executeRaw`INSERT INTO categories ("name") VALUES ('Projeto');`;
  await client.$executeRaw`INSERT INTO categories ("name") VALUES ('Prática');`;
  await client.$executeRaw`INSERT INTO categories ("name") VALUES ('Recuperação');`;

  await client.$executeRaw`INSERT INTO teachers ("name") VALUES ('Diego Pinho');`;
  await client.$executeRaw`INSERT INTO teachers ("name") VALUES ('Bruna Hamori');`;

  await client.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1);`;
  await client.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2);`;
  await client.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('React', 3);`;
  await client.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1);`;
  await client.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2);`;
  await client.$executeRaw`INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3);`;

  await client.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1);`;
  await client.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2);`;
  await client.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3);`;
  await client.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4);`;
  await client.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5);`;
  await client.$executeRaw`INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6);`;
}

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
