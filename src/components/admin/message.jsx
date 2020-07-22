import React, { Component } from "react";

import { toast } from "react-toastify";
import * as messageService from "../../services/messageServices";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Validation from "../common/validation";
import Joi from "joi-browser";

class Message extends Validation {
  state = {
    data: {
      subject: "",
      message: "",
    },
    errors: {},
    logMessage: [],
  };

  async componentDidMount() {
    const { data: logMessage } = await messageService.getmessages();

    this.setState({ logMessage });
  }

  schema = {
    subject: Joi.string().required().min(5),
    message: Joi.string().required().min(6),
  };

  doSubmit = async () => {
    console.log("do", this.state.data);
    const success = await messageService.createmessage(this.state.data);
    // const success = await driversService.createdriver(this.state.data);
    if (success) {
      //   // window.location = "/";
      toast.success("Successfully message log");
      //   this.props.history.push("/");
    }
  };

  render() {
    const { data, errors, logMessage } = this.state;
    console.log(logMessage);
    return (
      <div>
        <div className="row ">
          <div className="col-md-10">
            <form
              className=" m-2 p-1  col-11 col-sm-7  col-md-11"
              onSubmit={this.handleSubmit}
            >
              <h4 className="text-center"> Message</h4>

              <TextField
                name="subject"
                label="Subject"
                // color="secondary"
                size="small"
                value={data.subject}
                className=" m-3 col-md-5 col-10"
                onChange={this.handleChange}
                helperText={errors.subject}
                error={errors && errors.subject}
                required
              />

              <TextField
                name="message"
                label="Message"
                multiline
                size="small"
                value={data.message}
                rows={3}
                onChange={this.handleChange}
                className=" m-3 col-md-11 col-10"
                variant="outlined"
                errorText={errors && errors.message}
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
        </div>

        <div className=" col-2 col-md-7 mt-3  w-40 ">
          <table className="table table-striped   ">
            <thead>
              <tr>
                <th scope="col">Subject</th>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody>
              {logMessage.map((message) => (
                <tr key={message._id}>
                  <td> {message.subject}</td>
                  <td> {message.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Message;
