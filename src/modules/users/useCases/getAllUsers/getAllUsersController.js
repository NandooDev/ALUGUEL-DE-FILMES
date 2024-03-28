import { GetAllUsersUseCase } from "./getAllUsersUseCase.js";

export class GetAllUsersController {
    async handle(req, res) {

        const getAllUsersUseCase = new GetAllUsersUseCase();

        const result = await getAllUsersUseCase.execute();

        return res.status(201).json(result);
    }
}