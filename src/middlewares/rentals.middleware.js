import { postRentalSchema } from "../model/rentals.schema"
import { db } from "../database/database.js";

export async function postRentalsValidation(req, res, next) {
    const rental = req.body;

    const { error } = postRentalSchema.validate(rental);
    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send({ errors });
    }

    //se usuario ou jogo não existirem
    const customerExists = await db.query('SELECT * FROM customer WHERE id=$1', [rental.customerID])
    const gameExists = await db.query('SELECT * FROM games WHERE id=$1', [rental.gameID])

    //estoque do jogo
    const checkGameStock = await db.query('SELECT * FROM rentals WHERE "gameId"=$1 AND "returnDate IS NULL', [rental.gameID])
    
    const countRentalGameStock = checkGameStock.rowCount
    const stockGame = gameExists.rows[0].stockTotal

    if (customerExists.rowCount === 0 || 
        gameExists.rowCount === 0 ||
        countRentalGameStock >= stockGame
        ) {
        res.sendStatus(400)
    }

    res.locals.rental = rental;

    next();

}