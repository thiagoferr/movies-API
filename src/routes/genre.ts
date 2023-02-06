import { Router } from "express";
import genreController from "../controller/genreController";

const routes = Router()

routes.get('/genre', genreController.findAll);
routes.get('/genre/:id', genreController.findById);
routes.put('/genre/:id', genreController.updateById);
routes.delete('/genre/:id', genreController.deleteById);

export default routes