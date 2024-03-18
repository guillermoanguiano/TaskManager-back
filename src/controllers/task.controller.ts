import { Request, Response } from "express";
import { handleHttp } from "../utils";
import { insertTask } from "../services/task.service";

export const getTask = (_req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_TASK");
  }
};

export const getTasks = (_req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_TASKS");
  }
};

export const updateTaks = (_req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_TASK");
  }
};

export const postTask = (req: Request, res: Response) => {
  try {
    const response = insertTask(req.body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_POST_TASK");
  }
};

export const deleteTask = (_req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_TASK");
  }
};
