import { Router } from "express";
import personController from "../controller/personController";

const routes = Router()

routes.get('/person', personController.findAll);
routes.get('/person/:id', personController.findById);
routes.put('/person/:id', personController.updateById);
routes.delete('/person/:id', personController.deleteById);

export default routes