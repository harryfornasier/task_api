import SchemaBuilder from "@pothos/core";
import { PrismaClient } from "../generated/prisma";

export const builder = new SchemaBuilder<{
  Context: {
    db: PrismaClient;
  };
}>({});
