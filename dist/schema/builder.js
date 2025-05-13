import SchemaBuilder from "@pothos/core";
import { DateResolver } from "graphql-scalars";
export const builder = new SchemaBuilder({});
builder.addScalarType("Date", DateResolver, {});
