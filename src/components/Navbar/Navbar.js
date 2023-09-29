import PropTypes from "prop-types";
import { useNavigate, Link } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleHomeNavigation = () => {
    navigate("/");
  };
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand text-warning">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={handleHomeNavigation}>
                Home
              </Link>
            </li>
          </ul>

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Switch mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  title: "TextMagic",
  about: "About",
};

export default Navbar;
