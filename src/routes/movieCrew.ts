import { Router } from "express";
import movieCrewController from "../controller/movieCrewController";

const routes = Router()

routes.get('/moviecrew', movieCrewController.findAll);
routes.get('/moviecrew/:id', movieCrewController.findById);
routes.put('/moviecrew/:id', movieCrewController.updateById);
routes.delete('/moviecrew/:id', movieCrewController.deleteById);

export default routes