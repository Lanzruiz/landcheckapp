import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../state/actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  const logoutHandler = () => {
    logout();
  };
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> PropertyConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/properties">Properties</Link>
        </li>
        {isAuthenticated && (
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        )}
        {!isAuthenticated && (
          <>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
