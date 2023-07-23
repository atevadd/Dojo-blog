import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Sorry</h1>
      <p>That page cannot be found</p>
      <Link to="/">Go to Homepage</Link>
    </div>
  );
};

export default ErrorPage;
