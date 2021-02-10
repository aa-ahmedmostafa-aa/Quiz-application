import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import connectDB from './config/db.js';
import question from "./Routes/question.js";
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/question", question);
app.listen(process.env.PORT, () => console.log(`Server is running on port : ${process.env.PORT}`));
