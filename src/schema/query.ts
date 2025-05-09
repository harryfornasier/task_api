import { PrismaClient } from "../generated/prisma";
import { builder } from "./builder";
import { TaskRef } from "./task";

export const prisma = new PrismaClient();

builder.queryType({
  fields: (t) => ({
    tasks: t.field({
      type: [TaskRef],
      resolve: () => getTasks(),
    }),
  }),
});

async function getTasks() {
  return prisma.task.findMany();
}
