import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">
        PostTracker
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              PostsList
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              CreatePost
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/users" className="nav-link">
              CreateUser
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
