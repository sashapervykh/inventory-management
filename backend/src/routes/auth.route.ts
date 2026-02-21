import { Router } from "express";
import passport from "passport";
import { useGoogleStrategy } from "../lib/passport/useGoogleStrategy.js";
import jwt from "jsonwebtoken";

const authRouter = Router();
useGoogleStrategy();
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = jwt.sign({ user: req.user?.id }, process.env["JWT_SECRET"], {
      expiresIn: "7d",
    });
    res.cookie("auth", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });
    res.redirect(`${process.env["FRONTEND_URL"]}/home`);
  },
);

export default authRouter;
