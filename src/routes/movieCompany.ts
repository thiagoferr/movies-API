import { Router } from "express";
import movieCompanyController from "../controller/movieCompanyController";

const routes = Router()

routes.get('/moviecompany', movieCompanyController.findAll);
routes.get('/moviecompany/:id', movieCompanyController.findById);
routes.put('/moviecompany/:id', movieCompanyController.updateById);
routes.delete('/moviecompany/:id', movieCompanyController.deleteById);

export default routes