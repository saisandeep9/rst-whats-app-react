import React, { Component } from "react";

import { NavLink } from "react-router-dom";

class SideNav extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-dark  bg-dark  ml-3 App-nav ">
        <ul className="list-group navbar-nav">
          <li className="nav-item ">
            <NavLink to="home" className="  nav-link">
              <i className="fa">Dash Board</i>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink to="/users" className="  nav-link">
              <i className="fa">Drivers</i>
            </NavLink>
          </li>

          <li className="nav-item ">
            <NavLink to="/messages" className="  nav-link">
              <i className="fa fa-comments"> Message</i>
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
