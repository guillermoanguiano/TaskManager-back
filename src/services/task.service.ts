import { Task } from "../interfaces/tasks.interface";
import TaskModel from "../models/task.model";

const insertTask = async (task: Task) => {
  const response = await TaskModel.create(task);
  return response;
};

export { insertTask };
