import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    const { driver } = this.props;

    console.log(driver);

    return (
      <div>
        <nav className="navbar navbar-dark  navbar-expand-lg App-nav box ">
          <ul className="navbar-nav   ">
            {driver && driver.isAdmin === false && (
              <>
                <li className="nav-item ">
                  <NavLink to={"/myProfile"} className="  nav-link">
                    <i className="fa fa-home"> My profile</i>
                  </NavLink>
                </li>

                {/* <li className="nav-item ">
                  <NavLink to={"/products"} className="  nav-link">
                    Drivers<span className="sr-only">(current)</span>
                  </NavLink>
                </li> */}
                <li className="nav-item ">
                  <NavLink to={"/documents"} className="  nav-link">
                    <i className="fa "> Documents</i>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/logout">
                    <i className="fa"> Logout</i>
                  </NavLink>
                </li>
              </>
            )}

            {!driver && (
              <>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/signup">
                    <i className="fa fa-sign-in"> Sign up</i>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/">
                    <i className="fa"> Log in</i>
                  </NavLink>
                </li>
              </>
            )}
            {driver && driver.isAdmin === true && (
              <>
                <li className="nav-item ">
                  <NavLink to={"/drivers"} className="  nav-link">
                    <i className="fa"> Drivers admin</i>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to="/logout">
                    <i className="fa"> Logout</i>
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
