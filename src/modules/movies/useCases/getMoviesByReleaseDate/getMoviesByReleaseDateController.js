import { GetMoviesByReleaseDateUseCase } from "./getMoviesByReleaseDateUseCase.js";

export class GetMoviesByReleaseDateController {
    async handle(req, res) {

        const getMoviesByReleaseDateUseCase = new GetMoviesByReleaseDateUseCase;

        const result = await getMoviesByReleaseDateUseCase.execute();

        return res.status(201).json(result);
    }
}