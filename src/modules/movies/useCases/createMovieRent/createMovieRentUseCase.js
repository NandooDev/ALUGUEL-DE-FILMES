import { AppError } from "../../../../errors/appError.js";
import { prisma } from "../../../../prisma/client.js";

export class CreateMovieRentUseCase {
    async execute({ movieId, userId }) {
        // verificar se filme já existe 
        const movieExists = await prisma.movie.findUnique({
            where: {
                id: movieId
            }
        });

        if (!movieExists) {
            throw new AppError("Movie does not exists!");
        }

        // verificar se filme já está alugado por outra pessoa
        const movieAlreadyRented = await prisma.movieRent.findFirst({
            where: {
                movieId
            }
        });

        if (movieAlreadyRented) {
            throw new AppError("Movie already rented!");
        }

        // verificar se o usuário existe
        const userExists = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!userExists) {
            throw new AppError("User does not exists!");
        }

        // criar a locação
        await prisma.movieRent.create({
            data: {
                movieId,
                userId
            }
        });
    }
}