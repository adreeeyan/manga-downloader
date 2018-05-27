import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => (
  <div className="menu">
    <NavLink to="/search" className="fa fa-search" />
    <NavLink exact to="/" className="fa fa-list-alt" />
    <NavLink to="/settings" className="fa fa-cog" />
    <NavLink to="/about" className="fa fa-address-card" />
    <NavLink to="/feedback" className="fa fa-envelope" />
  </div>
);

export default NavBar;