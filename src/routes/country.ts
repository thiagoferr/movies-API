import { Request, Response } from 'express'
import express from 'express'
import countryController from '../controller/countryController';
const routes = express.Router()


routes.get('/country', countryController.findAll);
routes.get('/country/:id', countryController.findById);
routes.put('/country/:id', countryController.updateById)
routes.delete('/country/:id', countryController.deleteById)

export default routes;
