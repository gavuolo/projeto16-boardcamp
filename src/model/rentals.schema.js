import joi from "joi";

export const postRentalSchema = joi.object({
    customerId: joi.number().required(),
    gameId: joi.number().integer().min(1).required(),
    daysRented: joi.number().greater(0).required()
})