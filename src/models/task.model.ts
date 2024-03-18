// @ts-ignore
import { Schema, Types, model, Model } from "mongoose";
import { Task } from "../interfaces/tasks.interface";

const TaskSchema = new Schema<Task>(
  {
    id: { type: String },
    name: { type: String },
    description: { type: String },
    completed: { type: Boolean }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TaskModel = model('tasks', TaskSchema);

export default TaskModel;