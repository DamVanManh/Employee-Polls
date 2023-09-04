import React, { useState } from "react";
import { connect } from "react-redux";
import { setUser } from "../actions/user";

const LoginPage = ({ users, dispatch }) => {
  const [user, setUserSelected] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUser(user));
  };

  return (
    <div className="justify-content-center d-flex align-items-center mt-5">
      <form>
        <h1>Login</h1>
        <label>Select user:</label>
        <div className="row">
          {users.map((u) => {
            const { id, avatarURL, name } = u;
            return (
              <div key={id} className="col-4">
                <div
                  className={`${
                    user === id ? "selected-user" : ""
                  } p-3 hover rounded`}
                  onClick={(e) => setUserSelected(e.target.dataset.user)}
                  data-user={id}
                >
                  <img className="avatar" src={avatarURL} alt={name} />
                  <span className="px-2">{name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center">
          <button
            className="btn btn-primary"
            disabled={!user}
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  return {
    users: Object.keys(users).map((id) => users[id]),
  };
};

export default connect(mapStateToProps)(LoginPage);
