import { Router } from "express";
import { tagsController } from "./tags.controller.js";
import { TAGS_ROUTES } from "./constants/tagsRoutes.js";
import { requireAuth } from "../../shared/middlewares/requireAuth.js";

const tagsRouter = Router();
tagsRouter.get(TAGS_ROUTES.MAIN, requireAuth, tagsController.getTagsByInput);

export default tagsRouter;
