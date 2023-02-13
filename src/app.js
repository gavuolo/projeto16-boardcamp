import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routers from "./routes/routes.js"

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routers);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running in port: ${port}`));