import { Task } from "../interfaces/tasks.interface";
import TaskModel from "../models/task.model";

export const getTasks = async () => {
  const response = await TaskModel.find({});
  return response;
};

export const getTask = async (id: string) => {
  const response = await TaskModel.findOne({ _id: id });
  return response;
};

export const insertTask = async (task: Task) => {
  const response = await TaskModel.create(task);
  return response;
};

export const updateTask = async (id: string, data: Task) => {
  const response = await TaskModel.findOneAndUpdate(
    { _id: id }, 
    data, 
    { new: true },
  );
  return response;
};

export const deleteTask = async (id: string) => {
  const response = await TaskModel.deleteOne({ _id: id})
  return response;
}