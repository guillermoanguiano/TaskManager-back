import { Router } from "express";
import { deleteTask, getTask, getTasks, postTask, updateTaks } from "../controllers/task.controller";


const router = Router();

router.get("/", getTasks);
router.get('/:id', getTask);
router.post('/', postTask);
router.put('/:id', updateTaks);
router.delete('/:id', deleteTask);

export { router }; 