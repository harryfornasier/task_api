import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { builder } from "../src/schema/builder";
import { prisma } from "../src/schema/db";

import "../src/schema/schema";

const schema = builder.toSchema();

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ prisma }),
});
console.log(`Server ready at ${url}`);
