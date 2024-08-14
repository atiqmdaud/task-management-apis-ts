// // models/task.ts
// import mongoose, { Document, Schema } from "mongoose";
// import { ITask } from "../types/task";

// const taskSchema: Schema = new Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   status: {
//     type: String,
//     enum: ["Pending", "In Progress", "Completed"],
//     default: "Pending",
//   },
//   dueDate: { type: Date },
// });

// taskSchema.index({ title: 1 });

// const Task = mongoose.model<ITask & Document>("Task", taskSchema);

// export default Task;

// models/task.ts
import mongoose, { Document, Schema } from "mongoose";

export interface ITask extends Document {
  title: string;
  description?: string;
  status: "Pending" | "In Progress" | "Completed";
  dueDate?: Date;
}

const taskSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["Pending", "In Progress", "Completed"],
    default: "Pending",
  },
  dueDate: { type: Date },
});

taskSchema.index({ title: 1 });

const Task = mongoose.model<ITask>("Task", taskSchema);

export default Task;
