import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark  bg-dark  col-6 App-nav box">
        <ul className="list-group navbar-nav">
          <li className="nav-item ">
            <NavLink to="" className="  nav-link">
              <i className="fa">Dash Board</i>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink to="/drivers" className="  nav-link">
              <i className="fa">Drivers</i>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink to="/messages" className="  nav-link">
              Message
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink to="/endClint" className="  nav-link">
              End Clint
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default SideNav;
