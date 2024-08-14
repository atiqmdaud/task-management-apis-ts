// types/task.d.ts

export interface ITask {
  title: string;
  description?: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate?: Date;
}
