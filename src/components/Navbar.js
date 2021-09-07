import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-lightpx-4">
      <div className="container-fluid main-navbar">
        <NavLink to="/">
          <i className="fas fa-chevron-left white" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav text-end mb-2 mb-lg-0">
            <li className="m-2 white" key="home">
              <i className="fas fa-microphone" />
            </li>
            <li className="m-2 white" key="details">
              <i className="fas fa-cog" />
              <NavLink to="/details" activeClassName="fw-bold text-decoration-underline" className="link-dark text-decoration-none" exact>Details</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
