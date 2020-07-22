import React, { Component } from "react";
import ProfileNave from "./profileNav";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validation from "./common/validation";
import Joi from "joi-browser";
import * as driversService from "../services/driversService";
import { toast } from "react-toastify";

class Registration extends Validation {
  state = {
    data: {
      fristName: "",
      lastName: "",
      emailId: "",
      mobileNumber: "",
      password: "",
    },
    errors: {},
  };
  schema = {
    fristName: Joi.string().required().min(6),
    lastName: Joi.string().required().min(6),
    emailId: Joi.string(),
    mobileNumber: Joi.number().required().min(5),
    password: Joi.string().required().min(5),
  };

  doSubmit = async () => {
    // console.log("do", this.state.data);
    // const success = await userService.register(this.state.data);
    const success = await driversService.createdriver(this.state.data);
    if (success) {
      // window.location = "/";
      toast.success("Successfully registrade");
      this.props.history.push("/");
    }
  };

  render() {
    const { data, errors } = this.state;
    return (
      <div className="row">
        <div className="col-lg-3 bg-dark"></div>
        <div className="col-lg-6">
          <form
            className=" m-3 p-2  col-11 col-sm-7 box col-md-11"
            onSubmit={this.handleSubmit}
          >
            <h3 className="text-center"> My profile</h3>

            <TextField
              name="fristName"
              label="Frist Name"
              // color="secondary"
              size="small"
              value={data.fristName}
              className=" m-3 col-xl-10 col-10"
              onChange={this.handleChange}
              helperText={errors.fristName}
              error={errors.fristName}
              required
            />
            <TextField
              name="lastName"
              label="Last Name"
              color="secondary"
              size="small"
              className="m-3 col-xl-10 col-10"
              onChange={this.handleChange}
              helperText={errors.lastName}
              error={errors.lastName}
              required
            />
            <TextField
              name="emailId"
              label="Email Id"
              color="secondary"
              className="m-3 col-xl-10 col-10"
              onChange={this.handleChange}
              helperText={errors.emailId}
              error={errors.emailId}
              required
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              color="secondary"
              className="m-3 col-xl-10 col-10"
              onChange={this.handleChange}
              helperText={errors.password}
              error={errors.password}
              required
            />

            <TextField
              name="mobileNumber"
              label="Mobile Number"
              color="secondary"
              className="m-3 col-xl-10 col-10"
              onChange={this.handleChange}
              helperText={errors.mobileNumber}
              error={errors.mobileNumber}
              required
            />

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
    );
  }
}

export default Registration;
