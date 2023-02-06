import { Router } from "express";
import productionCountryController from "../controller/productionCountryController";

const routes = Router()

routes.get('/productioncountry', productionCountryController.findAll);
routes.get('/productioncountry/:id', productionCountryController.findById);
routes.put('/productioncountry/:id', productionCountryController.updateById);
routes.delete('/productioncountry/:id', productionCountryController.deleteById);

export default routes