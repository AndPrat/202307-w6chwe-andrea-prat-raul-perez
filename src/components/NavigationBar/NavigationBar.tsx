import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = (): React.ReactElement => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-bar__elements">
        <li>
          <NavLink to="/users" className="navigation-bar__home">
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/newuser" className="navigation-bar__add ">
            Add user
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
