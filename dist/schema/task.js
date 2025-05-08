import { builder } from "./builder";
export const TaskRef = builder.objectRef("Task");
TaskRef.implement({
    fields: (t) => ({
        id: t.exposeID("id"),
        title: t.exposeString("title"),
        completed: t.exposeBoolean("completed"),
        createdAt: t.expose("createdAt", {
            type: "Date",
        }),
        updatedAt: t.expose("updatedAt", {
            type: "Date",
        }),
    }),
});
