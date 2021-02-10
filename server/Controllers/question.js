import data from "../data.js";
import Question from "../Models/question.js";

//Get All Question ...........
export const getQuestion = async (req, res) => {
  try {
    const AllQuestion = await Question.find({});

    //Random Questition
    let questionResult = [],
      i = AllQuestion.length,
      j = 0;

    while (i--) {
      j = Math.floor(Math.random() * (i + 1));

      //Random Answers
      let answers = [...AllQuestion[j].all_answers];
      let randomAnswers = [],
        x = answers.length,
        y = 0;
      while (x--) {
        y = Math.floor(Math.random() * (x + 1));
        randomAnswers.push(answers[y]);
        answers.splice(y, 1);
      }

      AllQuestion[j].all_answers = [...randomAnswers];
      questionResult.push(AllQuestion[j]);
      AllQuestion.splice(j, 1);
    }
    res.status(200).json(questionResult.splice(5,questionResult.length));
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
};

//seed  Question ...........
export const seedQuestion = async (req, res) => {
  await Question.remove({});
  const createQuestions = await Question.insertMany(data.questions);
  res.send({ createQuestions });
};
