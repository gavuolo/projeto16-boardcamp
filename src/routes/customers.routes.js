import { Router } from "express";
import { postCustomerValidation } from "../middlewares/customers.middleware.js";
import { postCustomer, getCustomer, getCustomerId, updateCustomer } from "../controllers/customers.controller.js";
const customerRouter = Router();

customerRouter.post("/customer", postCustomerValidation, postCustomer);
customerRouter.get('/customer', getCustomer )
customerRouter.get("/customer/:id", getCustomerId)
customerRouter.put('/customer/:id', postCustomerValidation, updateCustomer)

export default customerRouter;
