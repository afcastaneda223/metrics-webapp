import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid main-navbar">
        <NavLink to="/">
          <i className="fas fa-chevron-left white" />
        </NavLink>
        <NavLink to="/details" activeClassName="fw-bold text-decoration-underline" className="text-decoration-none white" exact>Details</NavLink>
        <ul className="navbar-nav text-end">
          <li className="m-2 white" key="home">
            <i className="fas fa-microphone" />
          </li>
          <li className="m-2 white" key="details">
            <i className="fas fa-cog" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
