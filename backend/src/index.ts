import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/users.route.js";

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use("/users", usersRouter);
app.get("/", (request, response) => {
  response.status(200).send({ message: "Express + TypeScript Server" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
