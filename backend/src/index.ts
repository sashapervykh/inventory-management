import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./modules/users/users.route.js";
import authRouter from "./modules/auth/auth.route.js";
import cookieParser from "cookie-parser";
import { ENV } from "./shared/constants/env.js";
import { ENDPOINTS } from "./shared/constants/routes/endpoints.js";
import { useGoogleStrategy } from "./shared/lib/passport/useGoogleStrategy.js";
import { useGitHubStrategy } from "./shared/lib/passport/useGithubStrategy.js";
import { handleErrors } from "./shared/middlewares/handleErrors.js";
import inventoriesRouter from "./modules/inventories/inventories.route.js";
import categoriesRouter from "./modules/categories/categories.route.js";
import tagsRouter from "./modules/tags/tags.route.js";

dotenv.config();
const app = express();
const port = ENV.PORT || 3000;
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
useGoogleStrategy();
useGitHubStrategy();
app.use(express.json());
app.use(ENDPOINTS.USERS, usersRouter);
app.use(ENDPOINTS.INVENTORIES, inventoriesRouter);
app.use(ENDPOINTS.CATEGORIES, categoriesRouter);
app.use(ENDPOINTS.TAGS, tagsRouter);
app.use(ENDPOINTS.AUTH, authRouter);
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
