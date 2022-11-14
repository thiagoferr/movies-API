"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
// import { CreateUserController } from "../useCases/CreateUserController";
const moviesController_1 = require("../controller/moviesController");
const routes = (0, express_1.Router)();
exports.routes = routes;
// const user = new CreateUserController;
const movies = new moviesController_1.moviesController();
// routes.get('/user', user.createUser);
routes.get('/movies', movies.findAllMovies);
routes.get('/movies/:id', movies.findMovieById);
routes.get('/', (req, res) => {
    return res.send("The server is running...");
});
