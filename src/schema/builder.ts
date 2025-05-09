import SchemaBuilder from "@pothos/core";
import { PrismaClient } from "../generated/prisma";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: { Date: { Input: Date; Output: Date } };
  Context: {
    db: PrismaClient;
  };
  Objects: {
    Task: Task;
  };
}>({});

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

builder.addScalarType("Date", DateResolver, {});
