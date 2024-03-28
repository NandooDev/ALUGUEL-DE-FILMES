import { CreateMovieRentUseCase } from "./createMovieRentUseCase.js";

export class CreateMovieRentController {
    async handle(req, res) {
        const { movieId, userId } = req.body;

        const createMovieRentUseCase = new CreateMovieRentUseCase;

        const result = await createMovieRentUseCase.execute({ movieId, userId });

        return res.status(201).send();
    }
}