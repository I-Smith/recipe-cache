import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">PLACEHOLDER</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="navbar-collapse collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cache">My Cache</NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
