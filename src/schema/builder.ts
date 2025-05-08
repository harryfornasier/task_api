import SchemaBuilder from "@pothos/core";
import { PrismaClient } from "../generated/prisma";
import { DateResolver } from "graphql-scalars";

export const builder = new SchemaBuilder<{
  Scalars: { Date: { Input: Date; Output: Date } };
  Context: {
    db: PrismaClient;
  };
}>({});

builder.addScalarType("Date", DateResolver, {});
