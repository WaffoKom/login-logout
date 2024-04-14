import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import { userRouter } from "./routes/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/auth", userRouter);
const port = process.env.PORT;
mongoose.connect("mongodb://localhost:27017/authentification");

app.listen(port, () => console.log(`connexion reussit au port ${port}`));
