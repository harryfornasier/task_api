// src/schema/task.ts
import { builder } from "./builder";
import { prisma } from "./db";

builder.prismaObject("Task", {
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    completed: t.exposeBoolean("completed"),
    createdAt: t.expose("createdAt", { type: "Date" }),
    updatedAt: t.expose("updatedAt", { type: "Date" }),
  }),
});

builder.queryField("tasks", (t) =>
  t.prismaField({
    type: ["Task"],
    args: {
      search: t.arg.string(),
    },
    resolve: async (query, _root, args) => {
      if (args.search) {
        return prisma.task.findMany({
          ...query,
          where: {
            title: {
              contains: args.search,
            },
          },
        });
      }
      return prisma.task.findMany({ ...query });
    },
  })
);

// Query: task(id)
builder.queryField("task", (t) =>
  t.prismaField({
    type: "Task",
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _root, args) => {
      return prisma.task.findUnique({
        ...query,
        where: { id: String(args.id) },
      });
    },
  })
);

// Mutation: addTask
builder.mutationField("addTask", (t) =>
  t.prismaField({
    type: "Task",
    args: {
      title: t.arg.string({ required: true }),
    },
    resolve: async (query, _root, args) => {
      return prisma.task.create({
        ...query,
        data: {
          title: args.title,
        },
      });
    },
  })
);

// Mutation: toggleTask
builder.mutationField("toggleTask", (t) =>
  t.prismaField({
    type: "Task",
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _root, args) => {
      const task = await prisma.task.findUnique({
        where: { id: String(args.id) },
      });

      if (!task) return null;

      return prisma.task.update({
        ...query,
        where: { id: String(args.id) },
        data: { completed: !task.completed },
      });
    },
  })
);

// Mutation: deleteTask
builder.mutationField("deleteTask", (t) =>
  t.prismaField({
    type: "Task",
    nullable: true,
    args: {
      id: t.arg.id({ required: true }),
    },
    resolve: async (query, _root, args) => {
      try {
        return await prisma.task.delete({
          ...query,
          where: { id: String(args.id) },
        });
      } catch {
        return null;
      }
    },
  })
);
