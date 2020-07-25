import React, { Component } from "react";

import * as sendMessageServices from "../services/sendMessageServices";
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
    console.log("this from onsent", message._id);

    // let url = `whatsapp://send?text=whats app messssss&phone=918179600071`;
    let url =
      `https://api.whatsapp.com/send?phone=` +
      message.endClientId.mobileNumber +
      `&text=` +
      message.messageId.message;

    // window.location = url;

    const response = await sendMessageServices.deletemessage(message._id);
    if (response && response.status === 200) {
      toast.success(`Successfully deleted .`);
    } else {
      // this.setState({ logMessage: actualMessages });
    }
  };

  render() {
    const { sendMessage } = this.state;
    console.log(sendMessage);
    return (
      <div>
        <div className="container mt-3 box w-40">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Message</th>
                <th scope="col">Send</th>
              </tr>
            </thead>
            <tbody>
              {sendMessage.map(
                (message) => (
                  <tr key={message._id}>
                    {/* <td>
                      {Math.floor(Math.random() * sendMessage.length + 7)}
                    </td> */}
                    <td> {message.messageId.message}</td>

                    {/* <td> {driver.lastName}</td>
                <td> {driver.mobileNumber}</td>
                <td> {driver.emailId}</td> */}
                    <td>
                      <button
                        onClick={() => this.onSend(message)}
                        className="btn  m-2"
                      >
                        <i className="fa fa-paper-plane-o"> Send</i>
                      </button>
                      {/* {console.log(message.messageId)} */}
                    </td>
                  </tr>
                )

                // <tr>
                //   <th scope="row">1</th>
                //   <td>Mark</td>
                //   <td>Otto</td>
                //   <td>@mdo</td>
                // </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default SendMessage;
