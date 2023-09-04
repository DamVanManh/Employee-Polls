import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { saveAnswer } from "../actions/users";

const PollQuestion = ({ user, questions, users, dispatch }) => {
  const [answered, setAnswered] = useState(false);
  const navigate = useNavigate();

  const question_id = useParams().question_id;
  const question = questions[question_id];
  if (!question) {
    navigate("/pagenotfound");
  }
  const avatar = users[question?.author]?.avatarURL;

  const getPercent = (option) => {
    const total =
      question?.optionOne.votes.length + question?.optionTwo.votes.length;
    const vote = question?.[option].votes.length;
    return Math.floor((vote * 100) / total);
  };

  useEffect(() => {
    const idAnswereds = Object.keys(users[user].answers);
    if (idAnswereds.includes(question_id)) {
      setAnswered(true);
    } else {
      setAnswered(false);
    }
  }, []);

  const clickBack = () => {
    navigate("/");
  };

  const clickAnswer = (e) => {
    e.preventDefault();
    dispatch(
      saveAnswer({
        qid: question_id,
        user,
        option: e.target.name,
      })
    );
    navigate("/");
  };

  return (
    <div className="card mb-3 border-info" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4 d-flex flex-column justify-content-evenly p-3">
          <h5 className="card-title text-center">
            Create by: {question?.author}
          </h5>
          <img
            className="img-fluid rounded-circle border border-info"
            src={avatar}
            alt={question?.author}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-text">Would you rather</h5>
            {!answered && (
              <div>
                {["optionOne", "optionTwo"].map((option) => (
                  <div key={option}>
                    <p className="mb-1">{question?.[option].text}</p>
                    <div className="d-grid gap-2">
                      <button
                        name={option}
                        type="button"
                        className="btn btn-primary"
                        onClick={clickAnswer}
                      >
                        Click
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {answered && (
              <div>
                {["optionOne", "optionTwo"].map((option) => (
                  <div key={option}>
                    <p className="mb-1">{question?.[option].text}</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${getPercent(option)}%` }}
                      >
                        {`${getPercent(option)}%`}
                      </div>
                    </div>
                    {users[user].answers[question?.id] === option && (
                      <span className="text-info">You have voted for this</span>
                    )}
                    <p>Count people voted:{question?.[option].votes.length}</p>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={clickBack}
                >
                  Back to Home
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users, questions, user }) => ({
  users,
  questions,
  user,
});

export default connect(mapStateToProps)(PollQuestion);
