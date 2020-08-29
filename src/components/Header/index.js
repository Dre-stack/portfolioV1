import React from 'react';
import { NavLink } from 'react-router-dom';
import resume from '../../doc/resume2.pdf';

function Header() {
  return (
    <div className="header">
      <ul className="header__nav">
        <li className="header__nav-item">
          <NavLink
            exact
            to="/"
            activeClassName="header__nav-item active"
          >
            home
          </NavLink>{' '}
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/projects"
            activeClassName="header__nav-item active"
          >
            projects
          </NavLink>{' '}
        </li>
        <li className="header__nav-item">
          <a href={resume} target="_blank" rel="noopener noreferrer">
            resume
          </a>
        </li>
        <li className="header__nav-item">
          <NavLink
            to="/contact"
            activeClassName="header__nav-item active"
          >
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
