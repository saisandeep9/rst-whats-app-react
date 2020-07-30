import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};

  render() {
    const { user } = this.props;

    return (
      <div>
        <nav className="navbar navbar-dark  navbar-expand-lg App-nav box ">
          <ul className="navbar-nav   ">
            {user && user.isAdmin === false && (
              <>
                {/* <li className="nav-item ">
                  <NavLink to={"/myProfile"} className="  nav-link">
                    <i className="fa fa-home"> My profile</i>
                  </NavLink>
                </li> */}

                <li className="nav-item ">
                  <NavLink to={"/"} className="  nav-link">
                    <span className="fa "> Home</span>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink to={"/documents"} className="  nav-link">
                    <i className="fa "> Documents</i>
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link " to={"/"}>
                    <i className="fa">
                      {" "}
                      Burned Messages{" "}
                      <span class="badge badge-light">
                        {user.burnedMessages}
                      </span>
                    </i>
                  </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink className="nav-link " to={"/logout"}>
                    <i className="fa"> Logout</i>
                  </NavLink>
                </li>
              </>
            )}

            {!user && (
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
            {user && user.isAdmin === true && (
              <>
                <li className="nav-item ">
                  <NavLink to={"/"} className="  nav-link">
                    <i className="fa"> Home</i>
                  </NavLink>
                </li>
                {/* <li className="nav-item ">
                  <NavLink to={"/users"} className="  nav-link">
                    <i className="fa"> Drivers admin</i>
                  </NavLink>
                </li> */}
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
