import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import { ENV } from "../constants/env.js";

const connectionString = ENV.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
export const prisma = new PrismaClient({ adapter });
