import { prisma } from "../../../../prisma/client.js";

export class GetAllUsersUseCase {
    async execute() {
        const users = await prisma.user.findMany({
            include: {
                movie_rent: {
                    select: {
                        movie: {
                            select: {
                                title: true
                            }
                        }
                    }
                }
            }
        })

        return users;
    }
}