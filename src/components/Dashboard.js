import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ answereds, unanswereds }) => {
  return (
    <>
      <div className="card p-2 mb-2">
        <div className="card-header text-bg-primary">Unanswered polls</div>
        <div className="card-body">
          <div className="row">
            {unanswereds.map((question) => (
              <div className="col-4" key={question.id}>
                <Card question={question} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card p-2">
        <div className="card-header text-bg-success">Answered polls</div>
        <div className="card-body">
          <div className="row">
            {answereds.map((question) => (
              <div className="col-4" key={question.id}>
                <Card question={question} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ user, questions, users }) => {
  const idAnswereds = Object.keys(users[user].answers);
  const { answereds, unanswereds } = Object.keys(questions).reduce(
    ({ answereds, unanswereds }, id) => {
      if (idAnswereds.includes(id)) {
        return { answereds: [...answereds, questions[id]], unanswereds };
      } else {
        return { answereds, unanswereds: [...unanswereds, questions[id]] };
      }
    },
    { answereds: [], unanswereds: [] }
  );
  return {
    answereds: answereds.sort((a, b) => b.timestamp - a.timestamp),
    unanswereds: unanswereds.sort((a, b) => b.timestamp - a.timestamp),
  };
};

export default connect(mapStateToProps)(Dashboard);
