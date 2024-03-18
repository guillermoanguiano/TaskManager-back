import { Request, Response } from "express";
import { handleHttp } from "../utils";
import {
  deleteTask,
  getTask,
  getTasks,
  insertTask,
  updateTask,
} from "../services/task.service";

export const getItem = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const response = await getTask(id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export const getItems = async (_: Request, res: Response) => {
  try {
    const response = await getTasks();
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export const updateItems = async ({params, body}: Request, res: Response) => {
  try {
    const response = await updateTask(params.id, body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

export const postItem = async ({ body }: Request, res: Response) => {
  try {
    const response = await insertTask(body);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_POST_ITEM", e);
  }
};

export const deleteItem =  async ({ params }: Request, res: Response) => {
  try {
    const response = await deleteTask(params.id);
    res.send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};
