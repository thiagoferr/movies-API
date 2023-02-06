import { Request, Response } from 'express'
import express from 'express'
import { SUCCESS } from '../constants/success'

/*IMPORTAÇÃO DE ROTAS*/ 
import country from './country'
import department from './department'
import gender from './gender'
import genre from './genre'
import keyword from './keyword'
import language from './language'
import languageRole from './languageRole'
import movie from './movie'
import movieCast from './movieCast'
import movieCompany from './movieCompany'
import movieCrew from './movieCrew'
import movieGenres from './movieGenres'
import movieKeywords from './movieKeywords'
import movieLanguages from './movieLanguages'
import person from './person'
import productionCompany from './productionCompany'
import productionCountry from './productionCountry'
// import productionCompany from './productionCompany'
// import productionCountry from './productionCountry'

const routes = express.Router()

routes.get("/", (req:Request, res:Response) =>{
    return res.json(SUCCESS.ROUTES.API);
});

routes.use(country)
routes.use(department)
routes.use(gender)
routes.use(genre)
routes.use(keyword)
routes.use(language)
routes.use(languageRole)
routes.use(movie)
routes.use(movieCast)
routes.use(movieCompany)
routes.use(movieCrew)
routes.use(movieGenres)
routes.use(movieKeywords)
routes.use(movieLanguages)
routes.use(person)
routes.use(productionCompany)
routes.use(productionCountry)


export default routes;