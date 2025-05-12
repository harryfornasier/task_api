/* eslint-disable */
import type { Prisma, Task } from "/Users/harry/task_api/src/generated/prisma/index.js";
export default interface PrismaTypes {
    Task: {
        Name: "Task";
        Shape: Task;
        Include: never;
        Select: Prisma.TaskSelect;
        OrderBy: Prisma.TaskOrderByWithRelationInput;
        WhereUnique: Prisma.TaskWhereUniqueInput;
        Where: Prisma.TaskWhereInput;
        Create: {};
        Update: {};
        RelationName: never;
        ListRelations: never;
        Relations: {};
    };
}