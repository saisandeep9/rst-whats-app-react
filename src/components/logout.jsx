import { Component } from "react";
import auth from "../services/authService";

class Logout extends Component {
  componentDidMount() {
    console.log("log out");
    auth.logout();
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
