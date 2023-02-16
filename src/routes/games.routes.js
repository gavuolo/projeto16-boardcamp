import { Router } from "express";
import { getGames, postGame } from "../controllers/games.controller.js";
import { postGamesValidation } from "../middlewares/game.middleware.js";
const gameRouter = Router();

gameRouter.post('/game', postGamesValidation, postGame)
gameRouter.get('/game', getGames)
export default gameRouter