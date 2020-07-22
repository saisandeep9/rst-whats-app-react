import React, { Component } from "react";
import OtpInput from "react-otp-input";

export default class Otppg extends Component {
  state = {
    otp: "",
  };

  handleChange = (otp) => this.setState({ otp });

  render() {
    return (
      <div>
        <OtpInput
          onChange={this.handleChange}
          numInputs={4}
          separator={<span>-</span>}
        />
      </div>
    );
  }
}
