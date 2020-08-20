import React, { Component } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./services/authService";
import { Route, Switch, Redirect } from "react-router-dom";

import Login from "./components/login";
import Registration from "./components/registration";
import NavBar from "./components/navBar";
import Logout from "./components/logout";
import SendMessage2 from "./components/sendMessage2";

//admin
import DashBord from "./components/admin/dashboard";
import Users from "./components/admin/users";
// import SideNav from "./components/admin/sideNave";

//user
import Message from "./components/admin/message";
import endClint from "./components/admin/endclient";
import SendMessage from "./components/sendMessage";
import Documents from "./components/documents";

import Time from "./components/test";

import List from "./components/common/list";
// import Nav from "./components/nav";
// import Otppg from "./components/otppak";
// import Fb from "./components/firbase";

// var otpGenerator = require("otp-generator");

// var ot = otpGenerator.generate(6, { upperCase: false, specialChars: false });

class App extends Component {
  state = {
    user: {},
  };

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div className="App">
        <ToastContainer />
        <NavBar user={this.state.user} />
        <Time />
        <List />
        <Switch>
          <React.Fragment>
            {/* admin */}
            {user && user.isAdmin === true && (
              <div className="row ">
                <div className="col-md-2 col-0 ">{/* <SideNav /> */}</div>

                <div className="col-9  ">
                  <Route path="/" exact component={DashBord} />
                  <Route
                    path="/sendMessage"
                    exact
                    render={(props) => (
                      <SendMessage {...props} user={this.state.user} />
                    )}
                  />
                  <Route path="/users" exact component={Users} />
                  <Route path="/messages" exact component={Message} />
                  <Route path="/endClint" exact component={endClint} />
                  <Route path="/logout" exact component={Logout} />
                  {/* <Redirect to="/" /> */}
                </div>
              </div>
            )}
            {/* user */}
            {user && user.isAdmin === false && (
              <>
                <Route
                  path="/"
                  exact
                  render={(props) => (
                    <SendMessage {...props} user={this.state.user} />
                  )}
                />
                <Route path="/documents" exact component={Documents} />
                <Route path="/logout" exact component={Logout} />
                <Redirect to="/" />
              </>
            )}
            {!user && (
              <>
                <Route
                  path="/withoutUserMessage"
                  exact
                  component={SendMessage2}
                />
                <Route path="/signup" exact component={Registration} />
                <Route path="/" exact component={Login} />
                <Redirect to="/" />
              </>
            )}
          </React.Fragment>
        </Switch>

        {/* <Route path="/documents" exact component={Documents} /> */}
        {/* <Route path="/ProfileNav" exact component={ProfileNave} /> */}

        {/* <Route path="/drivers" exact component={Drivers} /> */}
      </div>
    );
  }
}

export default App;
