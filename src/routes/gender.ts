import { Router } from "express";
import genderController from "../controller/genderController";

const routes = Router()

routes.get('/gender', genderController.findAll);
routes.get('/gender/:id', genderController.findById);
routes.put('/gender/:id', genderController.updateById);
routes.delete('/gender/:id', genderController.deleteById);

export default routes