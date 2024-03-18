import { Router } from "express";


const router = Router();

router.get("/", (_req, res) => {
  res.send({ data: "Aqui van los datos"});
});

export { router };