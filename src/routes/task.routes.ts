import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItems } from "../controllers/task.controller";


const router = Router();

router.get("/", getItems);
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', updateItems);
router.delete('/:id', deleteItem);

export { router }; 