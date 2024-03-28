import "express-async-errors";
import express from 'express';
import cors from 'cors';
import { json } from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';
import { AppError } from "./errors/appError.js";

dotenv.config();

const app = express();
app.use(json());
app.use(cors());

app.use(routes);

app.use((err, req, res, next) => {
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: "error",
            message: err.message
        })
    }

    return res.status(500).json({
        status: "error",
        message: `Internal server error - ${err.message}`
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server is running on port "+PORT);
})