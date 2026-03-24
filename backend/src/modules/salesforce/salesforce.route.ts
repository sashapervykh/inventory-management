import { Router } from "express";
import { salesforceController } from "./salesforce.controller.js";
import { SALESFORCE_ROUTES } from "./constants/salesforceRoutes.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";

const salesforceRouter = Router();
salesforceRouter.post(
  SALESFORCE_ROUTES.CONTACT,
  requireAuth,
  salesforceController.createSalesforceEntity,
);
export default salesforceRouter;
