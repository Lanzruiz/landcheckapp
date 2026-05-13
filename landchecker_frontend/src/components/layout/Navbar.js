import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../state/actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  const logoutHandler = () => {
    logout();
  };

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link onClick={logoutHandler}>Logout</Link>
      </li>
    </ul>
  );

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
          <testLink />
        </li>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
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
