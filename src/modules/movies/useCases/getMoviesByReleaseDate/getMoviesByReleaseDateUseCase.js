import { prisma } from "../../../../prisma/client.js";

export class GetMoviesByReleaseDateUseCase {
    async execute() {
        const movies = await prisma.movie.findMany({
            orderBy: {
                release_date: "desc"
            },
            include: {
                movie_rent: {
                    select: {
                        user: {
                            select: {
                                name: true,
                                email: true
                            }
                        }
                    }
                }
            }
        })

        return movies;
    }
}