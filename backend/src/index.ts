import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/users.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import { ENV } from "./constants/env.js";
import { ENDPOINTS } from "./constants/routes/endpoints.js";
import { useGoogleStrategy } from "./lib/passport/useGoogleStrategy.js";

dotenv.config();
const app = express();
const port = ENV.PORT || 3000;
useGoogleStrategy();
app.use(cookieParser());
app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(ENDPOINTS.USERS, usersRouter);
app.use(ENDPOINTS.AUTH, authRouter);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
