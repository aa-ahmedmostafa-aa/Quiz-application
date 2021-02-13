import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

export default function ResultScreen() {
    let history = useHistory();
  const userData = useSelector((state) => state.user);
  const { result } = userData;
  const handelTryAgain=()=>{
    history.push("/quiz")
  }
  const handelHome=()=>{
    history.push("/")
  }
  
  return (
    <section className="mt-5">
      <div className="bg-white col-md-6 m-auto shadow-lg rounded overflow-auto text-center">
        <h1 className=" text-spec py-5 bg-light border-bottom">Finshed</h1>
        <div className="p-4">
          <h5 className=" text-spec"> score</h5>
          <h4 className=" text-spec" id="score">
            {result}
          </h4>
          <button
            className="btn float-right col-12 py-2 px-4 bg-dark  text-white my-4"
            id="tryBtn"
            onClick={handelTryAgain}
          >
            Try Again?
          </button>
          <button
            className="btn float-right col-12 py-2 px-4 bg-dark  text-white my-4"
            id="tryBtn"
            onClick={handelHome}
          >
            Home
          </button>
        </div>
      </div>
    </section>
  );
}
