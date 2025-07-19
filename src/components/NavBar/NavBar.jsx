import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
  return (
    <nav className="navbar">
       <div className="navbar-inner">
      <ul className="navbar-list">
        <li>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/aboutme" className="navbar-link">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink to="/timeline" className="navbar-link">
            Timeline
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className="navbar-link">
            Projects
          </NavLink>
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;