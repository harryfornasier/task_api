import SchemaBuilder from "@pothos/core";
import PrismaPlugin from "@pothos/plugin-prisma";
import { prisma } from "./db";
import type { PrismaClient } from "@prisma/client";

type Builder = SchemaBuilder<{
  PrismaTypes: {
    prisma: PrismaClient;
    model: {
      Task: true;
    };
  };
}>;

export const builder = new SchemaBuilder({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({});
builder.mutationType({});
