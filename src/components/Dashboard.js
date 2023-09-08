import { connect } from "react-redux";
import Card from "./Card";

const Dashboard = ({ answereds, unanswereds }) => {
  return (
    <div className="d-flex align-items-start mt-3">
      <div
        className="nav flex-column nav-pills me-3"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <button
          className="nav-link active btn-success"
          id="v-pills-home-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-home"
          type="button"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Unanswered polls
        </button>
        <button
          className="nav-link btn-success"
          id="v-pills-profile-tab"
          data-bs-toggle="pill"
          data-bs-target="#v-pills-profile"
          type="button"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Answered polls
        </button>
      </div>
      <div className="tab-content container-fluid" id="v-pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="v-pills-home"
          role="tabpanel"
          aria-labelledby="v-pills-home-tab"
        >
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
        </div>
        <div
          className="tab-pane fade"
          id="v-pills-profile"
          role="tabpanel"
          aria-labelledby="v-pills-profile-tab"
        >
          <div className="card p-2 container-fluid">
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
        </div>
      </div>
    </div>
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
