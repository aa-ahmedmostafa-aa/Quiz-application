import express from "express";
import { getQuestion, seedQuestion } from "../Controllers/question.js";
const router = express.Router();
router.get("/", getQuestion);
router.get("/seed", seedQuestion);

export default router;
