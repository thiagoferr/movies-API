import { Movies } from "../models/Movies";
import { Request, Response} from 'express'

class moviesController{
    
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

    public async findMovieById(req: Request, res: Response){
        const id = req.params.id
        const findMovieById = await Movies.findByPk(id);

        if(findMovieById === null){
            return res.status(404).json("Id não encontrado")
        }
            res.status(201).json(findMovieById);
    };

    public async findAllMovies(req: Request, res: Response){
        // const findAllMovies = await Movies.findAll();
        // const soma = findAllMovies.reduce((acc, cur) => acc + cur, 0)
        const { count , rows } = await Movies.findAndCountAll()
        console.log(`There is a total of ${count} movies`);
        res.status(200).json(rows);
    };
};

export { moviesController }