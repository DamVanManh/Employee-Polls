import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewQuestion } from "../actions/questions";

const AddQuestion = ({ user, dispatch }) => {
  const [optionOneText, setOptionOne] = useState("");
  const [optionTwoText, setOptionTwo] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const question = {
      optionOneText,
      optionTwoText,
      author: user,
    };
    e.preventDefault();
    dispatch(createNewQuestion(question));
    setOptionOne("");
    setOptionTwo("");
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-center">Would You Rather</h2>
      <h5 className="text-center">Create Your Own Poll</h5>
      <div className="mb-3">
        <label htmlFor="firstOption" className="">
          First Option
        </label>
        <input
          type="text"
          className="form-control"
          id="firstOption"
          placeholder="Option One"
          value={optionOneText}
          onChange={(e) => setOptionOne(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="secondOption" className="">
          Second Option
        </label>
        <input
          placeholder="Option Two"
          type="text"
          className="form-control"
          id="secondOption"
          value={optionTwoText}
          onChange={(e) => setOptionTwo(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={!optionOneText || !optionTwoText}
      >
        Submit
      </button>
    </form>
  );
};

const mapStateToProps = ({ user }) => {
  return {
    user,
  };
};

export default connect(mapStateToProps)(AddQuestion);
