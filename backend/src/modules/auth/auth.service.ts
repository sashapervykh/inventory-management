import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { AuthRepository, authRepository } from "./auth.repository.js";
import type { UserRegistrationDto } from "./types/UserRegistrationDto.js";
import { ENV } from "../../shared/constants/env.js";
import type { UserLoginDto } from "./types/UserLoginDto.js";
import { getFrontendUser } from "../../shared/utils/getFrontendUser.js";

export class AuthService {
  private repository: AuthRepository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  async register(registerUserDto: UserRegistrationDto) {
    const { password } = registerUserDto;
    const passwordHash = await this.getPasswordHash(password);
    const user = await this.repository.registerUser({
      ...registerUserDto,
      passwordHash,
    });
    const frontendUser = getFrontendUser(user);
    const token = this.getJwtToken(user.id);
    return { token, user: frontendUser };
  }

  async login(userLoginDto: UserLoginDto) {
    const { email, password } = userLoginDto;
    const user = await this.repository.getUserByEmail(email);
    const { passwordHash } = user;
    if (!passwordHash) {
      throw new Error("No Hash");
    }
    const isCorrect = await this.verifyPassword(password, passwordHash);
    if (!isCorrect) {
      throw new Error("Incorrect password");
    }
    const frontendUser = getFrontendUser(user);
    const token = this.getJwtToken(user.id);
    return { token, user: frontendUser };
  }

  private getJwtToken(userId: string) {
    const payload = { userId };
    const jwtToken = jwt.sign(payload, ENV.JWT_SECRET, {
      expiresIn: "7d",
    });
    return jwtToken;
  }

  private async getPasswordHash(password: string) {
    return await bcrypt.hash(password, ENV.SALTS_ROUNDS);
  }

  private async verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword);
  }
}

export const authService = new AuthService(authRepository);
