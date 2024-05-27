import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

import { configDotenv } from "dotenv";
configDotenv();

const app = express();

const port = process.env.PORT | 3001;
const DB_URL = process.env.DB_URL;

app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(DB_URL)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server started at port:${port}`);
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
