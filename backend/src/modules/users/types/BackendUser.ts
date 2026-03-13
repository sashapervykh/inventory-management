import type { Prisma } from "@prisma/client";
import { UsersRepository } from "../users.repository.js";

export type BackendUsers = Prisma.PromiseReturnType<
  UsersRepository["getUsers"]
>;
