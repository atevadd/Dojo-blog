import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* The app logo */}
      <h1>
        <a href="/">The Dojo blog</a>
      </h1>
      {/* The nav link */}
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create" className="btn">
            New Blog
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
