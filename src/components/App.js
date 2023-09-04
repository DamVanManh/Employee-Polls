import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";
import AddQuestion from "./AddQuestion";
import Leaderboard from "./Leaderboard";
import PollQuestion from "./PollQuestion";
import PageNotFound from "./PageNotFound";
import { setQuestions } from "../actions/questions";
import { setUsers } from "../actions/users";
import { _getUsers, _getQuestions } from "../utils/_DATA";

const App = ({ user, dispatch }) => {
  useEffect(() => {
    dispatch(async (dispatch) => {
      const { users, questions } = await Promise.all([
        _getUsers(),
        _getQuestions(),
      ]).then(([users, questions]) => ({
        users,
        questions,
      }));
      dispatch(setQuestions(questions));
      dispatch(setUsers(users));
    });
  }, []);
  return (
    <div className="container row d-flex justify-content-center m-auto">
      {user === null ? (
        <LoginPage />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/add" element={<AddQuestion />} />
            <Route path="/questions/:question_id" element={<PollQuestion />} />
            <Route path="/pagenotfound" exact element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      )}
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(App);
