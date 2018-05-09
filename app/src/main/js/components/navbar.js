import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="menu">
    <NavLink exact to="/" className="fa fa-tachometer" />
    <NavLink to="/search" className="fa fa-search" />
    <NavLink to="/downloads" className="fa fa-tasks" />
    <NavLink to="/settings" className="fa fa-cog" />
    <NavLink to="/about" className="fa fa-address-card" />
    <NavLink to="/feedback" className="fa fa-envelope" />
  </div>
);

export default NavBar;