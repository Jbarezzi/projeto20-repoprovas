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
