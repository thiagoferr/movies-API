"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moviesController = void 0;
const Movies_1 = require("../models/Movies");
class moviesController {
    //  constructor( 
    //     public id_movie: number,
    //     public title: string,
    //     public budget: number,
    //     public homepage: string,
    //     public overview: string,
    //     public popularity: number,
    //     public release_date: Date,
    //     public revenue: number,
    //     public runtime: number,
    //     public movie_status: string,
    //     public tagline: string,
    //     public vote_average: number,
    //     public vote_count: number)
    // {};
    async findMovieById(req, res) {
        const id = req.params.id;
        const findMovieById = await Movies_1.Movies.findByPk(id);
        if (findMovieById === null) {
            return res.status(404).json("Id não encontrado");
        }
        res.status(201).json(findMovieById);
    }
    ;
    async findAllMovies(req, res) {
        // const findAllMovies = await Movies.findAll();
        // const soma = findAllMovies.reduce((acc, cur) => acc + cur, 0)
        const { count, rows } = await Movies_1.Movies.findAndCountAll();
        console.log(`There is a total of ${count} movies`);
        res.status(200).json(rows);
    }
    ;
}
exports.moviesController = moviesController;
;
