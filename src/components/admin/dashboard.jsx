import React, { Component } from "react";
import * as driversService from "../../services/driversService";
import * as messageService from "../../services/messageServices";

import * as sendMessageServices from "../../services/sendMessageServices";
import * as clintService from "../../services/endClintServices";

class DashBord extends Component {
  state = {
    drivers: [],
    logMessage: [],
    sendMessage: [],
    mobileNumber: [],
  };

  async componentDidMount() {
    const { data: drivers } = await driversService.getdrivers();
    const { data: logMessage } = await messageService.getmessages();
    const { data: sendMessage } = await sendMessageServices.getmessages();
    const { data: mobileNumber } = await clintService.getclients();

    // this.setState({ logMessage });

    this.setState({ drivers, logMessage, sendMessage, mobileNumber });
  }
  render() {
    const { drivers, logMessage, sendMessage, mobileNumber } = this.state;
    return (
      <div className="row">
        <div className="card m-3 p-3 text-center" style={{ width: "10rem" }}>
          <h3>{drivers.length}</h3>
          <h6> Total Drivers </h6>
        </div>
        <div className="card m-3 p-3 text-center" style={{ width: "10rem" }}>
          <h3>{logMessage.length}</h3>
          <h6> Total campings messages </h6>
        </div>
        <div className="card m-3 p-3 text-center" style={{ width: "10rem" }}>
          <h3>{sendMessage.length}</h3>
          <h6> Messages need to send </h6>
        </div>
        <div className="card m-3 p-3 text-center" style={{ width: "10rem" }}>
          <h3>{mobileNumber.length}</h3>
          <h6> Total contacts </h6>
        </div>
      </div>
    );
  }
}

export default DashBord;
