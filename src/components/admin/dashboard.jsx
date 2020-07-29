import React, { Component } from "react";
import * as usersService from "../../services/usersService";
import * as messageService from "../../services/messageServices";

import * as sendMessageServices from "../../services/sendMessageServices";
import * as clintService from "../../services/endClintServices";

import { NavLink } from "react-router-dom";

class DashBord extends Component {
  state = {
    users: [],
    logMessage: [],
    sendMessage: [],
    mobileNumber: [],
  };

  async componentDidMount() {
    const { data: users } = await usersService.getusers();
    const { data: logMessage } = await messageService.getmessages();
    const { data: sendMessage } = await sendMessageServices.getmessages();
    const { data: mobileNumber } = await clintService.getclients();

    // this.setState({ logMessage });

    this.setState({ users, logMessage, sendMessage, mobileNumber });
  }

  getburndMessages = () => {
    let result = this.state.users.map((user) => user.burnedMessages);

    if (result.length !== 0) {
      var sum = result.reduce((prv, curr) => prv + curr);
    }
    return sum;
  };

  render() {
    const { users, logMessage, sendMessage, mobileNumber } = this.state;

    return (
      <div className="row ">
        <div
          className="card m-3 p-3 text-center   "
          style={{ width: "10rem", backgroundColor: "#FF7105" }}
        >
          <NavLink
            to="/users"
            className="  nav-link"
            style={{ color: "black" }}
          >
            <h3>{users.length}</h3>
            <h3>
              {" "}
              <i className="fa fa-user"></i>
            </h3>

            <h6>Users </h6>
          </NavLink>
        </div>
        <div
          className="card m-3 p-3 text-center"
          style={{ width: "10rem", backgroundColor: "#B2D732" }}
        >
          <NavLink
            to="/messages"
            className="  nav-link"
            style={{ color: "black" }}
          >
            <h3>{logMessage.length}</h3>
            <h3>
              <i class="fa fa-bullhorn"></i>
            </h3>
            <h6> campings messages </h6>
          </NavLink>
        </div>
        <div
          className="card m-3 p-3 text-center"
          style={{ width: "10rem", backgroundColor: "#999999" }}
        >
          <NavLink
            to="/sendMessage"
            className="  nav-link"
            style={{ color: "black" }}
          >
            {" "}
            <h3>{sendMessage.length}</h3>
            <h3>
              {" "}
              <i className="fa fa-comments"></i>
            </h3>
            <h6> Messages Remaining</h6>
          </NavLink>
        </div>
        <div
          className="card m-3 p-3 text-center"
          style={{ width: "10rem", backgroundColor: "#f24816" }}
        >
          {" "}
          <NavLink
            to="/endClint"
            className="  nav-link"
            style={{ color: "black" }}
          >
            {" "}
            <h3>{mobileNumber.length}</h3>
            <h3>
              {" "}
              <i class="fa fa-address-card"></i>
            </h3>
            <h6> Contacts </h6>
          </NavLink>
        </div>

        <div
          className="card m-3 p-3 text-center"
          style={{ width: "10rem", backgroundColor: "#34A853" }}
        >
          <h3> {this.getburndMessages()}</h3>

          <h6> Total Messages burned </h6>
        </div>
      </div>
    );
  }
}

export default DashBord;
