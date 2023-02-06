import { Router } from "express";
import languageRoleController from "../controller/languageRoleController";

const routes = Router()

routes.get('/languagerole', languageRoleController.findAll);
routes.get('/languagerole/:id', languageRoleController.findById);
routes.put('/languagerole/:id', languageRoleController.updateById);
routes.delete('/languagerole/:id', languageRoleController.deleteById);

export default routes