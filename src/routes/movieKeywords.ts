import { Router } from "express";
import movieKeywordsController from "../controller/movieKeywordsController";

const routes = Router()

routes.get('/moviekeywords', movieKeywordsController.findAll);
routes.get('/moviekeywords/:id', movieKeywordsController.findById);
routes.put('/moviekeywords/:id', movieKeywordsController.updateById);
routes.delete('/moviekeywords/:id', movieKeywordsController.deleteById);

export default routes