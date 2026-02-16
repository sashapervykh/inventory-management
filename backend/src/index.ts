import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = Number(process.env.PORT) || 3000;
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.get("/", (request, response) => {
  response.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
