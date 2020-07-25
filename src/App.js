import React, { Component } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/authService";
import { Route, Redrect, Switch } from "react-router-dom";

import Login from "./components/login";
import Registration from "./components/registration";
import NavBar from "./components/navBar";
import Logout from "./components/logout";

//admin
import DashBord from "./components/admin/dashboard";
import Drivers from "./components/admin/drivers";
import SideNav from "./components/admin/sideNave";

//user
import Message from "./components/admin/message";
import endClint from "./components/admin/endclient";
import SendMessage from "./components/sendMessage";
import Documents from "./components/documents";

import Nav from "./components/nav";
import Otppg from "./components/otppak";
import Fb from "./components/firbase";

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
        <Switch>
          {/* <SendMessage /> */}
          {/* <SideNav /> */}

          {/* <Otppg /> */}
          {/* <Registration />
        <Fb /> */}

          {/* <ProfileNave /> */}
          {/* <MyProfile /> */}
          {/* <Documents /> */}
          {/* <Nav /> */}

          {/* admin */}
          {driver && driver.isAdmin === true && (
            <div className="row ">
              <div className="col-md-2 col-1 bg-dark box">
                <SideNav />
              </div>

              <div className="col-9  ">
                <Route path="/home" exact component={DashBord} />
                <Route path="/drivers" exact component={Drivers} />
                <Route path="/messages" exact component={Message} />
                <Route path="/endClint" exact component={endClint} />
                <Route path="/logout" exact component={Logout} />
              </div>
            </div>
          )}
          {/* user */}
          {driver && driver.isAdmin === false && (
            <>
              <Route path="/home" exact component={SendMessage} />
              <Route path="/documents" exact component={Documents} />
              <Route path="/logout" exact component={Logout} />
            </>
          )}

          <Route path="/signup" exact component={Registration} />
          <Route path="/" exact component={Login} />
        </Switch>

        {/* <Route path="/documents" exact component={Documents} /> */}
        {/* <Route path="/ProfileNav" exact component={ProfileNave} /> */}

        {/* <Route path="/drivers" exact component={Drivers} /> */}
      </div>
    );
  }
}

export default App;
