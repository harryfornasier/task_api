import { builder } from "./builder";
import { TaskRef } from "./task";

builder.queryType({
  fields: (t) => ({
    tasks: t.field({
      type: [TaskRef],
      resolve: () => getTasks(),
    }),
  }),
});

function getTasks(): any {
  throw new Error("Function not implemented.");
}
