import { CreateMovieUseCase } from "./createMovieUseCase.js";

export class CreateMovieController {
    async handle(req, res) {
        const { title, duration, release_date } = req.body;

        const createMovieUseCase = new CreateMovieUseCase;

        const result = await createMovieUseCase.execute({ title, duration, release_date });

        return res.status(201).json(result);
    }
}