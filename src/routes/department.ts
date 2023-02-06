import {Router} from "express";
import departmentController from "../controller/departmentController";

const routes = Router()

routes.get('/department', departmentController.findAll)
routes.get('/department/:id', departmentController.findById)
routes.put('/department/:id', departmentController.updateById)
routes.delete('/department/:id', departmentController.deleteById)

export default routes;
