import { Router } from "express";
import { supportController } from "./support.controller.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";
import { SUPPORT_ROUTES } from "./constants/supportRoutes.js";

const supportRouter = Router();
supportRouter.post(
  SUPPORT_ROUTES.MAIN,
  requireAuth,
  supportController.createReport,
);

export default supportRouter;
