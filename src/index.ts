import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { schema } from "./schema/index";
import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

const server = new ApolloServer({
  schema,
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({
    db: prisma,
  }),
});

console.log(`🚀 Server ready at ${url}`);

const tasks = [
  {
    id: "1",
    title: "Do the dishes",
    completed: "false",
    createdAt: "1746705914",
    updatedAt: "1746705914",
  },
];
