import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="text-center">
      <h1>404 Error</h1>
      <p>The page does not exist</p>
      <button type="submit" onClick={handleClick} className="btn btn-primary">
        Go to Home
      </button>
    </div>
  );
};

export default PageNotFound;
