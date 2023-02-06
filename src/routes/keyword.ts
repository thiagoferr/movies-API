import { Router } from "express";
import keywordController from "../controller/keywordController";

const routes = Router()

routes.get('/keyword', keywordController.findAll);
routes.get('/keyword/:id', keywordController.findById);
routes.put('/keyword/:id', keywordController.updateById);
routes.delete('/keyword/:id', keywordController.deleteById);

export default routes