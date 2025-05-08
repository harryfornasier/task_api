import SchemaBuilder from "@pothos/core";

const builder = new SchemaBuilder({});
const TaskRef = builder.objectRef<Task>("Task");

interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

TaskRef.implement({
  fields: (t) => ({
    id: t.exposeID("id"),
    title: t.exposeString("title"),
    completed: t.exposeBoolean("completed"),
    createdAt: t.expose("createdAt", {
      type: Date,
    }),
    updatedAt: t.expose("updatedAt", {
      type: Date,
    }),
  }),
});
