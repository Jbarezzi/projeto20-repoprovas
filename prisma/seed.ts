import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function main() {
  const test = await client.user.upsert({
    where: { email: "test@test.com" },
    update: {},
    create: { email: "test@test.com", password: "1234" },
  });
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
