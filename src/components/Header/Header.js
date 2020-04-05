import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="Navigator">
        <h3>TODOLIST</h3>
        <NavLink to="/history" activeClassName="selectedLink">
          History
        </NavLink>
        <NavLink to="/" exact activeClassName="selectedLink">
          Home
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
