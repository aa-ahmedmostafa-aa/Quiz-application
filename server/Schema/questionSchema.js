import mongoose from "mongoose";

export const questionSchema = mongoose.Schema(
  {
    question: String,
    correct_answer: String,
    all_answers: [String],
  },
  {
    timestamps: true,
  }
);
