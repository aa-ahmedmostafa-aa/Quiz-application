import React, { useState } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userStart } from "../../redux/actions/userAction";

export default function Welcome(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  const [name, setName] = useState("");
  const [validate, setValidate] = useState(false);

  const submitHandelr = (e) => {
    e.preventDefault();
    if (name === "") {
      setValidate(true);
    } else {
      dispatch(userStart(name));
      history.push("/quiz");
    }
  };

  return (
    <div className="bg-white col-md-6 m-auto shadow-lg rounded-lg  overflow-auto">
      <div className=" bg-light border-bottom">
        <h1 className="p-3 text-spec text-center">
          Welcome to Master Linux Task{" "}
        </h1>
      </div>

      <form className="p-3" onSubmit={submitHandelr}>
        <div className="form-group">
          <label htmlFor="nameInput">Name :</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your name .."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <small id="nameHelp" className="form-text text-muted">
            We'll never share your name with anyone else.
          </small>
        </div>

        {validate && (
          <div className="alert alert-danger mt-3">
            Please Enter Your Name 
          </div>
        )}

        <button
          className="btn col-12 py-2 px-4 bg-dark text-white   my-4"
          id="next"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
