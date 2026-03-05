import passport from "passport";
import { AUTH_PROVIDERS } from "../../shared/constants/authProviders.js";
import { type Request, type Response } from "express";
import { ENV } from "../../shared/constants/env.js";
import jwt from "jsonwebtoken";
import { STATUS_CODES } from "../../shared/constants/statusCodes.js";
import { FRONTEND_ROUTES } from "../../shared/constants/frontendRoutes/frontendRoutes.js";

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

  continueWithGithub({
    scope,
    session,
  }: {
    scope?: string[];
    session: boolean;
  }) {
    return passport.authenticate(AUTH_PROVIDERS.GITHUB, {
      scope: scope,
      session: session,
    });
  }

  handleResponse(req: Request, res: Response) {
    console.log(req.user?.id);
    console.log(req.user?.id);
    const token = jwt.sign({ userId: req.user?.id }, ENV.JWT_SECRET, {
      expiresIn: "7d",
    });
    console.log(token);
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
