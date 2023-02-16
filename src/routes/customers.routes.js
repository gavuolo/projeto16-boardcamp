import { Router } from "express";
import { postCustomerValidation } from "../middlewares/customers.middleware.js";
import { postCustomer, getCustomer, getCustomerId } from "../controllers/customers.controller.js";
const customerRouter = Router();

customerRouter.post("/customer", postCustomerValidation, postCustomer);
customerRouter.get('/customer', getCustomer )
customerRouter.get("/customer/:id", getCustomerId)

export default customerRouter;
