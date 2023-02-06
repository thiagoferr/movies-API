import { Router } from "express";
import movieGenresController from "../controller/movieGenresController";

const routes = Router()

routes.get('/moviegenres', movieGenresController.findAll);
routes.get('/moviegenres/:id', movieGenresController.findById);
routes.put('/moviegenres/:id', movieGenresController.updateById);
routes.delete('/moviegenres/:id', movieGenresController.deleteById);

export default routes