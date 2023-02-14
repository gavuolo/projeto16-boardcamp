import { db } from "../database/database.js";

export async function postCustomer(req, res) {
  // const { name, phone, cpf, birthday } = res.locals.customer;
  const { name, phone, cpf, birthday } = req.body;

  try {
    await db.query(
    `
    INSERT INTO customers (name, phone, cpf, birthday)
    VALUES ($1, $2, $3, $4);
    `,
      [name, phone, cpf, birthday]
    );
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message)
  }
}
