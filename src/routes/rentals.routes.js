import { Router } from "express";
const rentalsRouter = Router();

rentalsRouter.post("/rentals", postCustomerValidation, postCustomer);
rentalsRouter.get('/rentals', getCustomer)

export default rentalsRouter;