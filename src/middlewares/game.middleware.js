import { postGameSchema } from "../model/games.schema.js";
import { db } from "../database/database.js";

export async function postGamesValidation(req, res, next) {
  const game = req.body;

  const { error } = postGameSchema.validate(game);
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send({ errors });
  }

  const gameExists = await db.query('SELECT * FROM games WHERE name=$1', [
    game.name,
  ]);

  //se o jogo existir
  if ((gameExists.rowCount != 0)) {
    return res.sendStatus(409);
  }
  res.locals.game = game;

  next();
}
