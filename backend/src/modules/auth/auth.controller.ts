import { type NextFunction, type Request, type Response } from "express";
import { authService, type AuthService } from "./auth.service.js";
import { userRegistrationSchema } from "./schemas/userRegistrationSchema.js";
import { FRONTEND_ROUTES } from "../../shared/constants/frontendRoutes/frontendRoutes.js";
import { STATUS_CODES } from "../../shared/constants/statusCodes.js";
import { userLoginSchema } from "./schemas/userLoginSchema.js";

class AuthController {
  private service: AuthService;

  constructor(service: AuthService) {
    this.service = service;
  }

  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userRegistrationDto = userRegistrationSchema.parse(req.body);
      const token = await authService.register(userRegistrationDto);
      res.cookie("auth", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
      });
      res.redirect(FRONTEND_ROUTES.HOME);
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, password } = userLoginSchema.parse(req.body);
      const token = await this.service.login({ email, password });
      res.cookie("auth", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
      });
      res.redirect(FRONTEND_ROUTES.HOME);
    } catch (error) {
      next(error);
    }
  };
}

export const authController = new AuthController(authService);
