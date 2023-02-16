import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import gameRouter from "./routes/games.routes.js"
import customerRouter from "./routes/customers.routes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(gameRouter);
app.use(customerRouter)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running in port: ${PORT}`));