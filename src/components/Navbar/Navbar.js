import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark pl-3">
      <Link className="navbar-brand" to="/">
        StarWars
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/people">
              Personas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/planets">
              Planetas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/starships/?page=1">
              Naves
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
