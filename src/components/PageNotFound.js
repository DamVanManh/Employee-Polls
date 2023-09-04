import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>404 Error Page</h1>
      <p>The page does not exist</p>
      <button type="submit" onClick={handleClick} className="btn btn-primary">
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
