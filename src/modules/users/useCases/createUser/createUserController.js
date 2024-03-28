import { CreateUserUseCase } from "./createUserUseCase.js";

export class CreateUserController {
    async handle(req, res) {
        const { name, email } = req.body;

        const createUserUseCase = new CreateUserUseCase;

        const result = await createUserUseCase.execute({ name, email });

        return res.status(201).json(result);
    }
}