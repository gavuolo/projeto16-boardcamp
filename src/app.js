import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import gameRouter from "./routes/games.routes.js"
import customerRouter from "./routes/customers.routes.js"
import rentalsRouter from './routes/rentals.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use([gameRouter, customerRouter, rentalsRouter]);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));