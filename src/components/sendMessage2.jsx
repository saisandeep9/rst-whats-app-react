import React, { Component } from "react";

import * as sendMessageServices from "../services/sendMessageServices";

// import * as usersService from "../../src/services/usersService";

import { toast } from "react-toastify";

class SendMessage2 extends Component {
  state = {
    sendMessage: [],
  };

  async componentDidMount() {
    const { data: sendMessage } = await sendMessageServices.getmessages();

    this.setState({ sendMessage });
  }

  onSend = async (message) => {
    // let url = `whatsapp://send?text=whats app messssss&phone=918179600071`;
    let url =
      `https://api.whatsapp.com/send?phone=` +
      message.endClientId.mobileNumber +
      `&text=` +
      message.messageId.message;

    const actualMessages = this.state.sendMessage;

    const filteredMessages = actualMessages.filter(
      (message) => message._id !== message._id
    );

    this.setState({ sendMessage: filteredMessages });

    // let url2 =
    //   "https://web.whatsapp.com/send?phone=" +
    //   message.endClientId.mobileNumber +
    //   "&text=" +
    //   message.messageId.message;

    // console.log(url2);

    // https://web.whatsapp.com/send?phone=919113516006&text=test+1

    // const update = await usersService.updateusers(this.props.user._id);
    window.location = url;

    const response = await sendMessageServices.deletemessage(message._id);
    if (response && response.status === 200) {
      toast.success(`Successfully deleted .`);
    } else {
      this.setState({ sendMessage: actualMessages });
    }
  };

  render() {
    const { sendMessage } = this.state;

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
                      target="_blank"
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

export default SendMessage2;
