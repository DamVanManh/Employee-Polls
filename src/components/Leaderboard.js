import { connect } from "react-redux";

const Leaderboard = ({ members }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Users</th>
          <th>Number Created</th>
          <th>Number Answered</th>
        </tr>
      </thead>
      <tbody>
        {members.map((user) => {
          const { name, avatarURL, answers, questions } = user;
          return (
            <tr key={name}>
              <td>
                <img src={avatarURL} alt={name} />
                {name}
              </td>
              <td>{questions}</td>
              <td>{answers}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const mapStateToProps = ({ users }) => {
  const members = Object.values(users)
    .map((user) => {
      const questions = user.questions.length;
      const { name, avatarURL } = user;
      const answers = Object.values(user.answers).length;
      const total = answers + questions;
      return { name, questions, avatarURL, answers, total };
    })
    .sort((a, b) => b.total - a.total);
  return { members };
};

export default connect(mapStateToProps)(Leaderboard);
