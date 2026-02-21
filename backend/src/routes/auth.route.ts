import { Router } from "express";
import passport from "passport";
import { useGoogleStrategy } from "../lib/passport/useGoogleStrategy.js";

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
    res.redirect(`${process.env["FRONTEND_URL"]}/home`);
  },
);

export default authRouter;
