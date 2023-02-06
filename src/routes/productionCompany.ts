import { Router } from "express";
import productionCompanyController from "../controller/productionCompanyController";

const routes = Router()

routes.get('/productioncompany', productionCompanyController.findAll);
routes.get('/productioncompany/:id', productionCompanyController.findById);
routes.put('/productioncompany/:id', productionCompanyController.updateById);
routes.delete('/productioncompany/:id', productionCompanyController.deleteById);

export default routes