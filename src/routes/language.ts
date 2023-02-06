import { Router } from "express";
import languageController from "../controller/languageController";

const routes = Router()

routes.get('/language', languageController.findAll);
routes.get('/language/:id', languageController.findById);
routes.put('/language/:id', languageController.updateById);
routes.delete('/language/:id', languageController.deleteById);

export default routes