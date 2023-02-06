import { Router } from "express";
import movieController from "../controller/movieController";

const routes = Router()

routes.get('/movie', movieController.findAll);
routes.get('/movie/:id', movieController.findById);
routes.put('/movie/:id', movieController.updateById);
routes.delete('/movie/:id', movieController.deleteById);

export default routes