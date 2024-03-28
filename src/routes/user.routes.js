import { Router } from "express";
import { CreateUserController } from "../modules/users/useCases/createUser/createUserController.js";
import { GetAllUsersController } from "../modules/users/useCases/getAllUsers/getAllUsersController.js";

const createUserController = new CreateUserController();
const getAllUsersController = new GetAllUsersController();

const userRoutes = Router();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', getAllUsersController.handle);

export { userRoutes };