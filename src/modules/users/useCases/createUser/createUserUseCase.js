import { AppError } from "../../../../errors/appError.js";
import { prisma } from "../../../../prisma/client.js";

export class CreateUserUseCase {
    async execute({ name, email }) {
        // Verificar se o usuário existe
        const userAlreadyExists = await prisma.user.findUnique({
            where: {
                email
            }
        });

        if (userAlreadyExists) {
            //erro
            throw new AppError("User already exists!");
        }
        // Criar o usuário
        const user = await prisma.user.create({
            data: {
                name,
                email
            }
        });

        return user;
    }
}