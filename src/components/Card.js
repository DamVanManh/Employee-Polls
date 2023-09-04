import { Link } from "react-router-dom";

const Card = ({ question }) => {
  const questionDate = new Date(question?.timestamp).toDateString();

  return (
    <div className="card mb-2">
      <h5 className="card-header">{question?.author}</h5>
      <div className="card-body">
        <h5 className="card-title">{questionDate}</h5>
        <Link
          to={`questions/${question?.id}`}
          className="navbar-link text-decoration-none"
        >
          <div className="d-grid gap-2">
            <button type="button" className="btn btn-info">
              Show
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
