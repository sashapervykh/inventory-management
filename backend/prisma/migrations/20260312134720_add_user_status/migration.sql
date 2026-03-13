-- CreateEnum
CREATE TYPE "user_status" AS ENUM ('blocked', 'active');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "status" "user_status" NOT NULL DEFAULT 'active';
