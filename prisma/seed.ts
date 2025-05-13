import { PrismaClient } from "../src/generated/prisma/index.js";
const prisma = new PrismaClient();

async function main() {
  await prisma.task.createMany({
    data: [
      {
        title: "Buy groceries",
        completed: false,
      },
      {
        title: "Finish GraphQL API",
        completed: false,
      },
      {
        title: "Walk the dog",
        completed: true,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
