import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar bg-dark">
      <h1>
        <a href="/">
          <i class="fas fa-code"></i> PropertyConnector
        </a>
      </h1>
      <ul>
        <li>
          <a href="/properties">Properties</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
