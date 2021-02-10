import mongoose from "mongoose";
import {questionSchema} from "../Schema/questionSchema.js";

const Question = mongoose.model("Question", questionSchema);
export default Question;
