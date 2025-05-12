import { PrismaClient } from "../generated/prisma";
import { builder } from "./builder";
import { TaskRef } from "./task";

export const prisma = new PrismaClient();

builder.queryType({
  fields: (t) => ({
    tasks: t.field({
      type: [TaskRef],
      args: {
        search: t.arg.string({ required: false }),
      },
      resolve: async (_parent, args) => getTasks(args.search ?? undefined),
    }),
  }),
});

async function getTasks(search?: string) {
  return prisma.task.findMany({
    where: search ? { title: { contains: search } } : undefined,
  });
}

export async function getTaskById(id: string) {
  return prisma.task.findUnique({
    where: { id },
  });
}
