import { Router } from "express";
import movieCastController from "../controller/movieCastController";

const routes = Router()

routes.get('/moviecast', movieCastController.findAll);
routes.get('/moviecast/:id', movieCastController.findById);
routes.put('/moviecast/:id', movieCastController.updateById);
routes.delete('/moviecast/:id', movieCastController.deleteById);

export default routes