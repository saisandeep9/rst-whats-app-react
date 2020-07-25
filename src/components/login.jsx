import React from "react";
// import Validation from "../common/validation";

// import auth from "../../services/authService";
// import Input from "../common/Input";
// import Joi from "joi-browser";
import { toast } from "react-toastify";
import auth from "../services/authService";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validation from "./common/validation";
import Joi from "joi-browser";

class Login extends Validation {
  state = {
    data: {
      emailId: "",
      password: "",
    },
    errors: {},
  };

  schema = {
    emailId: Joi.string().required(),
    password: Joi.string().required().min(5),
  };

  doSubmit = async () => {
    console.log(this.state.data);
    const { data } = this.state;
    const success = await auth.login(data);
    console.log(success);
    if (success) {
      toast.success("Successfully login");
      window.location = "/home";
    }
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <div className="row m-5">
          <div className="col-8 ">
            <h1 className="text-center">what's app </h1>
            <h5 className="">
              admin log id :admin@gmail.com <br />
              password:12345678{" "}
            </h5>
            <h5 className="">
              Driver log id :user@gmail.com <br />
              password:12345678{" "}
            </h5>
          </div>

          <div className="col-4">
            <div
              className="container  box  float-right "
              // style={{ width: "0%" }}
            >
              <form onSubmit={this.handleSubmit}>
                <h1 className="text-center"> Login</h1>

                <TextField
                  name="emailId"
                  label="E-mail"
                  color="secondary"
                  size="small"
                  className="m-3 col-xl-10 col-10"
                  onChange={this.handleChange}
                  helperText={errors.lastName}
                  error={errors.lastName}
                  required
                />

                <TextField
                  name="password"
                  label="Password"
                  color="secondary"
                  size="small"
                  className="m-3 col-xl-10 col-10"
                  onChange={this.handleChange}
                  helperText={errors.password}
                  error={errors.password}
                  required
                />

                <center>
                  <button
                    type="submit"
                    className=" btn btn-primary  btn-block mb-3 mt-2"
                  >
                    Sign up
                  </button>
                </center>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
