import React, { Component } from "react";
import { NavLink } from "react-router-dom";
// import MyProfile from "../components/myprofile";
// import Documents from "../components/documents";
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

class ProfileNav extends Component {
  state = {};
  render() {
    return (
      <div className="text-center">
        <nav className="">
          <h3 className="m-2 ">
            <NavLink
              to={"/myProfile"}
              className="badge badge-primary nav-link m-1 mouse-hover "
            >
              My Profile
            </NavLink>
            <NavLink
              to={"/documents"}
              className="badge badge-primary nav-link m-1 mouse-hover"
            >
              Documents
            </NavLink>
          </h3>
        </nav>
      </div>
    );
  }
}

export default ProfileNav;
