import passport from "passport";
import { AUTH_PROVIDERS } from "../constants/authProviders.js";
import { type Request, type Response } from "express";
import { ENV } from "../constants/env.js";
import { FRONTEND_ROUTES } from "../constants/frontendRoutes/frontendRoutes.js";
import jwt from "jsonwebtoken";
import { STATUS_CODES } from "../constants/statusCodes.js";

export class PassportService {
  continueWithGoogle({
    scope,
    session,
  }: {
    scope?: string[];
    session: boolean;
  }) {
    return passport.authenticate(AUTH_PROVIDERS.GOOGLE, {
      scope: scope,
      session: session,
    });
  }

  handleGoogleResponse(req: Request, res: Response) {
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
    res.redirect(FRONTEND_ROUTES.HOME);
  }

  logout(req: Request, res: Response) {
    res.clearCookie("auth", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
    });
    res.status(STATUS_CODES.OK).send({ message: "Logout successfully" });
  }
}

export const passportService = new PassportService();
