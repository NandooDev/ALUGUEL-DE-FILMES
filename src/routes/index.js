import { Router } from "express";
import { userRoutes } from "./user.routes.js";
import { movieRoutes } from "./movie.routes.js";

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/movies', movieRoutes);

export { routes };