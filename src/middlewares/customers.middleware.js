import { db } from "../database/database.js";
import { postCustomerSchema } from "../model/customers.schema.js";

export async function postCustomerValidation(req, res, next) {
  const customer = req.body;
  const { id } = req.params;

  const { error } = postCustomerSchema.validate(customer);
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send({ errors });
  }

  const cpfExists = await db.query("SELECT * FROM customers WHERE cpf=$1", [
    customer.cpf,
  ]);
  if (cpfExists.rowCount !== 0 && cpfExists.rows[0].id !== Number(id)) {
    return res.sendStatus(409);
  }
  res.locals.customer = id ? { ...customer, id } : customer;
  next();
}
