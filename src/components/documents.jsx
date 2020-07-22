import React, { Component } from "react";
import ProfileNave from "../components/profileNav";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validation from "./common/validation";
import Joi from "joi-browser";

class Documents extends Component {
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
    password: Joi.string().required(),
  };

  doSubmit = async () => {
    console.log("do", this.state.data);
    // const success = await userService.register(this.state.data);

    // if (success) {
    //   window.location = "/signup";
    // }
  };

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-3 bg-dark"></div>
          <div className="col-lg-6">
            <form className=" m-3 p-2  col-11 col-sm-7 box col-md-11">
              <ProfileNave />
              <h3 className="text-center"> Documents</h3>

              <TextField
                name="mobileNumber"
                label="mobile Number"
                color="secondary"
                className="m-3 col-xl-10 col-10"
              />
              <TextField
                name="aadharCardNumbe"
                label="Aadhar Card Number"
                color="secondary"
                className="m-3 col-xl-10 col-10"
              />
              <TextField
                name="emailId"
                label="Are you Driver"
                color="secondary"
                className="m-3 col-xl-10 col-10"
              />

              <br />

              <Button className="m-3 col-xl-7 col-7 " color="primary">
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

export default Documents;
