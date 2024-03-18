import { Schema, model } from "mongoose";
import { Task } from "../interfaces/tasks.interface";

const TaskSchema = new Schema<Task>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    completed: { type: Boolean },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskModel = model("tasks", TaskSchema);

export default TaskModel;
