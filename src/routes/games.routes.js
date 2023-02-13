import { Router } from "express";
import { postGame } from "../controllers/games.controller.js";
import { postGamesValidation } from "../middlewares/game.middleware.js";
const gameRouter = Router();

gameRouter.post('/game', postGamesValidation, postGame)

export default gameRouter