import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setUser } from "../actions/user";

const Navbar = ({ name, avatarURL, dispatch }) => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(setUser(null));
    navigate("/");
  };

  const clickLink = (event) => {
    event.preventDefault();
    navigate(event.target.dataset.link);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active btn fs-4"
                data-link="/"
                onClick={clickLink}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                data-link="/leaderboard"
                onClick={clickLink}
                className="nav-link active btn fs-4"
              >
                Leaderboard
              </a>
            </li>
            <li className="nav-item">
              <a
                data-link="/add"
                onClick={clickLink}
                data-testid="new-question-btn"
                className="nav-link active btn fs-4"
              >
                New Question
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <img src={avatarURL} alt={name} className="avatar" />
            <span className="pe-2">{name}</span>
            <button
              className="btn btn-outline-secondary"
              onClick={handleLogout}
              data-testid="log-out-btn"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ users, user }) => {
  const { name, avatarURL } = users[user];
  return {
    name,
    avatarURL,
  };
};

export default connect(mapStateToProps)(Navbar);
