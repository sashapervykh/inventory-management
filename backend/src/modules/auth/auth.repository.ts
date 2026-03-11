import { prisma } from "../../shared/lib/prisma.js";
import type { UserCreationDto } from "./types/UserCreationDto.js";

export class AuthRepository {
  async registerUser(userCreationDto: UserCreationDto) {
    const user = await prisma.user.create({
      data: {
        ...userCreationDto,
        provider: "local",
        providerId: `local:${userCreationDto.email}`,
      },
    });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await prisma.user.findFirstOrThrow({
      where: { email: email },
    });
    return user;
  }
}

export const authRepository = new AuthRepository();
