import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuestitions } from "../../redux/actions/QuizAction";
import { userResult } from "../../redux/actions/userAction";
import LoadinBox from "../LoadingBox";

export default function Quiz(props) {
  const dispatch = useDispatch();
  const allQuestions = useSelector((state) => state.allQuestions);
  const { questions, loading, error } = allQuestions;
  const userName = useSelector((state) => state.user);
  const { name } = userName;

  const [numQuestition, setNumQuestition] = useState(0);
  const [validate, setValidate] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [finshed, setFinished] = useState(false);

  // handel user answer
  const answerHandelr = () => {
   
    if (!userAnswer) {
      setValidate(true);
    } else {
      if (userAnswer === questions[numQuestition].correct_answer) {
        setUserScore(userScore + 1);
      }

      if (questions.length === numQuestition + 1) {
        setFinished(true);
      } else {
        setNumQuestition((prevState) => prevState + 1);
        setValidate(false);
        setUserAnswer("");
      }
    }
  };

  //  Redirect Result screen
  useEffect(() => {
    if (finshed) {
      dispatch(userResult(userScore));
      props.history.push("/resultScreen");
    }
  }, [dispatch, finshed, userScore, props.history]);

  // Get All Question
  useEffect(() => {
    dispatch(getQuestitions());
  }, [dispatch]);

  return (
    <section className="mt-5">
      {loading ? (
        <LoadinBox />
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="bg-white col-md-6 m-auto shadow-lg rounded-lg  overflow-auto">
          <div className=" bg-light border-bottom">
            <h1 className="p-3 text-spec text-center">{`Welcome  ${name}`}</h1>
            <h3 className="p-3 text-spec text-center">Quiz Sporting</h3>
            <span className="float-right bg-spec rounded-pill text-white  ">
              <span id="current"></span> Of <span id="totalAmount"></span>{" "}
              Question
            </span>
            <div className="clearFix"></div>
          </div>

          <div className="p-4 text-spec">
            <h5 className="d-inline">Q {numQuestition + 1} : </h5>
            <h5 id="question" className="d-inline">
              {questions ? questions[numQuestition].question : null}
            </h5>

            <div className="mt-4" id="rowAnswer">
              {questions
                ? questions[numQuestition].all_answers.map((answer) => (
                    <div key={answer} className="form-check">
                      <label className="form-check-label">
                        <input
                          type="radio"
                          className="form-check-input"
                          name="answer"
                          value={answer}
                          onChange={(e) => setUserAnswer(e.target.value)}
                        />
                        {answer}
                      </label>
                    </div>
                  ))
                : null}
            </div>
            {validate && (
              <div className="alert alert-danger mt-3">
                Please Choose Your Answer
              </div>
            )}

            <button
              className="btn col-12 py-2 px-4 bg-dark text-white   my-4"
              id="next"
              onClick={answerHandelr}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
