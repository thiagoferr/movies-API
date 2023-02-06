import { Router } from "express";
import movieLanguagesController from "../controller/movieLanguagesController";

const routes = Router()

routes.get('/movielanguages', movieLanguagesController.findAll);
routes.get('/movielanguages/:id', movieLanguagesController.findById);
routes.put('/movielanguages/:id', movieLanguagesController.updateById);
routes.delete('/movielanguages/:id', movieLanguagesController.deleteById);

export default routes