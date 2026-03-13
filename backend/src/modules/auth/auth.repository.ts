import { PrismaClientKnownRequestError } from "@prisma/client/runtime/client";
import { prisma } from "../../shared/lib/prisma.js";
import type { UserCreationDto } from "./types/UserCreationDto.js";
import { WrongCredentialsError } from "../../shared/errors/WrongCredentialsError.js";
import { PRISMA_ERRORS_CODES } from "../../shared/constants/prismaErrorsCodes.js";
import { DoubleUserError } from "../../shared/errors/DoubleUserError.js";

export class AuthRepository {
  async registerUser(userCreationDto: UserCreationDto) {
    try {
      const user = await prisma.user.create({
        data: {
          ...userCreationDto,
          provider: "local",
          providerId: `local:${userCreationDto.email}`,
        },
      });
      return user;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PRISMA_ERRORS_CODES.DUPLICATED
      ) {
        throw new DoubleUserError();
      }
      throw error;
    }
  }

  async getUserByEmail(email: string) {
    try {
      const user = await prisma.user.findFirstOrThrow({
        where: { email: email },
      });
      return user;
    } catch (error) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === PRISMA_ERRORS_CODES.NOT_EXISTED
      ) {
        throw new WrongCredentialsError();
      }
      throw error;
    }
  }
}

export const authRepository = new AuthRepository();
