import { Router } from "express";
import { AUTH_ROUTES } from "../constants/routes/authRoutes.js";
import { passportService } from "../services/passport.service.js";

const authRouter = Router();
authRouter.get(
  AUTH_ROUTES.GOOGLE.MAIN,
  passportService.continueWithGoogle({
    scope: ["profile", "email"],
    session: false,
  }),
);

authRouter.get(
  AUTH_ROUTES.GOOGLE.CALLBACK,
  passportService.continueWithGoogle({ session: false }),
  passportService.handleGoogleResponse,
);

export default authRouter;
