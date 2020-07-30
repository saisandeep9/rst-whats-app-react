import React, { Component } from "react";

import * as sendMessageServices from "../services/sendMessageServices";

import * as usersService from "../../src/services/usersService";

import { toast } from "react-toastify";

class SendMessage extends Component {
  state = {
    sendMessage: [],
  };

  async componentDidMount() {
    const { data: sendMessage } = await sendMessageServices.getmessages();
    // console.log(sendMessage);
    this.setState({ sendMessage });
  }

  onSend = async (message) => {
    console.log(this.props.user._id);

    // let url = `whatsapp://send?text=whats app messssss&phone=918179600071`;
    let url =
      `https://api.whatsapp.com/send?phone=` +
      message.endClientId.mobileNumber +
      `&text=` +
      message.messageId.message;

    // let url2 =
    //   "https://web.whatsapp.com/send?phone=" +
    //   message.endClientId.mobileNumber +
    //   "&text=" +
    //   message.messageId.message;

    // console.log(url2);

    // https://web.whatsapp.com/send?phone=919113516006&text=test+1

    window.location = url;

    const update = await usersService.updateusers(this.props.user._id);

    console.log(update);
    const response = await sendMessageServices.deletemessage(message._id);
    if (response && response.status === 200) {
      toast.success(`Successfully deleted .`);
    } else {
      // this.setState({ logMessage: actualMessages });
    }
  };

  render() {
    const { sendMessage } = this.state;
    const user = this.props.user;
    console.log("this is user", user);

    return (
      <div>
        <div className="container-md mt-3 m w-40">
          <table className="table table-striped col-4 col-md-12">
            <thead>
              <tr>
                <th scope="col">Message</th>
                <th scope="col">Send</th>
              </tr>
            </thead>
            <tbody>
              {sendMessage.map((message) => (
                <tr key={message._id}>
                  <td> {message._id}</td>

                  <td>
                    <button
                      onClick={() => this.onSend(message)}
                      className="btn  m-2 "
                      // target="_blank"
                    >
                      <i className="fa fa-paper-plane-o"> Send</i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SendMessage;
