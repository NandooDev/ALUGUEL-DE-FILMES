import { AppError } from "../../../../errors/appError.js";
import { prisma } from "../../../../prisma/client.js";

export class CreateMovieUseCase {
    async execute({ title, duration, release_date }) {
        // Verificar se o filme existe
        const movieAlreadyExists = await prisma.movie.findUnique({
            where: {
                title
            }
        });

        if (movieAlreadyExists) {
            //erro
            throw new AppError("Movie already exists!");
        }
        // Criar o filme
        const movie = await prisma.movie.create({
            data: {
                title,
                duration,
                release_date
            }
        });

        return movie;
    }
}