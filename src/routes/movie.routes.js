import { Router } from "express";
import { CreateMovieController } from "../modules/movies/useCases/createMovie/createMovieController.js";
import { CreateMovieRentController } from "../modules/movies/useCases/createMovieRent/createMovieRentController.js";
import { GetMoviesByReleaseDateController } from "../modules/movies/useCases/getMoviesByReleaseDate/getMoviesByReleaseDateController.js";

const createMovieController = new CreateMovieController();
const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateController();
const createMovieRentController = new CreateMovieRentController();

const movieRoutes = Router();

movieRoutes.post('/', createMovieController.handle);
movieRoutes.get('/release', getMoviesByReleaseDateUseCase.handle);
movieRoutes.post('/rent', createMovieRentController.handle);

export { movieRoutes };