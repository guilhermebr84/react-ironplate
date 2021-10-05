import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../contexts/authContext";

function Navbar() {
  const { loggedInUser, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse  d-flex justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/teams"
              >
                Teams
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/teams/new"
              >
                New Team
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/matches"
              >
                Matches
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav-link"
                activeClassName="active"
                exact
                to="/matches/new"
              >
                New Match
              </NavLink>
            </li>
            {loggedInUser.user._id ? (
              <li
                className="nav-item d-flex align-items-center"
                onClick={logout}
                style={{ cursor: "pointer" }}
              >
                <span>Close</span>
              </li>
            ) : null}
          </ul>

          {/* Só exibe foto do avatar e nome do usuário se o mesmo estiver logado */}
          {loggedInUser.user._id ? (
            <div>
              <span className="me-4">Hello, {loggedInUser.user.name}</span>
              <img
                style={{ width: "45px", height: "45px", objectFit: "cover" }}
                className="img-fluid rounded-circle"
                src={loggedInUser.user.pictureUrl}
                alt="user"
              />
            </div>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
