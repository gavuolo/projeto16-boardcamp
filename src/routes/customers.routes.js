import { Router } from "express";
import { postCustomerValidation } from "../middlewares/customers.middleware.js";
import { postCustomer } from "../controllers/customers.controller.js";
const customerRouter = Router();

customerRouter.post("/customer", postCustomerValidation, postCustomer);

export default customerRouter;
