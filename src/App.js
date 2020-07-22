import React, { Component } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/authService";

import Fb from "./components/firbase";

import { Route, Redrect, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import Nav from "./components/nav";
import Logout from "./components/logout";
import Message from "./components/admin/message";
import endClint from "./components/admin/endclient";

import Documents from "./components/documents";
import Login from "./components/login";
import Registration from "./components/registration";
import Otppg from "./components/otppak";

//admin
import Drivers from "./components/admin/drivers";
import SideNav from "./components/admin/sideNave";

// var otpGenerator = require("otp-generator");

// var ot = otpGenerator.generate(6, { upperCase: false, specialChars: false });

class App extends Component {
  state = {
    driver: {},
  };

  componentDidMount() {
    const driver = auth.getCurrentUser();
    this.setState({ driver });
  }

  render() {
    const { driver } = this.state;
    return (
      <div className="App">
        <ToastContainer />
        <NavBar driver={this.state.driver} />

        {/* <SideNav /> */}

        {/* <Otppg /> */}
        {/* <Registration />
        <Fb /> */}

        {/* <ProfileNave /> */}
        {/* <MyProfile /> */}
        {/* <Documents /> */}
        {/* <Nav /> */}

        <Switch>
          {driver && driver.isAdmin === true && (
            <div className="row ">
              <div className="col-3 ">
                <SideNav />
              </div>

              <div className="col-9  ">
                <Route path="/drivers" exact component={Drivers} />
                <Route path="/messages" exact component={Message} />
                <Route path="/endClint" exact component={endClint} />
              </div>
            </div>
          )}

          {driver && driver.isAdmin === false && (
            <Route path="/documents" exact component={Documents} />
          )}

          <Route path="/signup" exact component={Registration} />
          <Route path="/" exact component={Login} />
          {/* <Route path="/documents" exact component={Documents} /> */}
          {/* <Route path="/ProfileNav" exact component={ProfileNave} /> */}

          {/* <Route path="/drivers" exact component={Drivers} /> */}
          <Route path="/logout" exact component={Logout} />
        </Switch>
      </div>
    );
  }
}

export default App;
