import { Router } from "express"
// import { CreateUserController } from "../useCases/CreateUserController";
import { moviesController } from "../controller/moviesController"
const routes = Router();

// const user = new CreateUserController;
const movies = new moviesController();

// routes.get('/user', user.createUser);
routes.get('/movies', movies.findAllMovies);
routes.get('/movies/:id', movies.findMovieById);
routes.get('/', (req, res) => {
    return res.send("The server is running...")
})

export { routes }
