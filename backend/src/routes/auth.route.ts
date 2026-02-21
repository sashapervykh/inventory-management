import { Router } from "express";
import passport from "passport";
import { useGoogleStrategy } from "../lib/passport/useGoogleStrategy.js";
import jwt from "jsonwebtoken";
import { ENV } from "../constants/env.js";
import { AUTH_ROUTES } from "../constants/routes/authRoutes.js";

const authRouter = Router();
useGoogleStrategy();
authRouter.get(
  AUTH_ROUTES.GOOGLE.MAIN,
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

authRouter.get(
  AUTH_ROUTES.GOOGLE.CALLBACK,
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({ user: req.user?.id }, ENV.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("auth", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });
    res.redirect(`${ENV.FRONTEND_URL}/home`);
  },
);

export default authRouter;
