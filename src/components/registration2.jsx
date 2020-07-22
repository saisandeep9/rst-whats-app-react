import React, { Component } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Validation from "./common/validation";
// import Joi from "joi-browser";
import OtpInput from "react-otp-input";

class Registration extends Component {
  state = {
    data: {
      mobileNumber: "",
    },
    errors: {},
    otp: "",
  };

  handleChangeOtp = (otp) => this.setState({ otp });

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="row">
          <div className="col-lg-3 bg-dark"></div>
          <div className="col-lg-6">
            <form
              className=" m-3 p-2  col-11 col-sm-7 box col-md-11"
              onSubmit={this.handleSubmit}
            >
              <h3 className="text-center"> My profile</h3>

              <TextField
                name="mobileNumber"
                label="Mobile Number"
                // color="secondary"
                size="small"
                value={data.fristName}
                className=" m-3 col-xl-10 col-10"
                onChange={this.handleChange}
                helperText={errors.fristName}
                error={errors.fristName}
                required
              />
              <div className=" m-3 col-xl-10 col-10">
                <OtpInput
                  onChange={this.handleChangeOtp}
                  numInputs={4}
                  separator={<span>-</span>}
                />
              </div>
              <br />

              <Button
                type="submit"
                className="m-3 col-xl-7 col-7 "
                color="primary"
              >
                Submit
              </Button>
            </form>
          </div>
          <div className="col-lg-3 bg-dark"></div>
        </div>
      </div>
    );
  }
}

export default Registration;
