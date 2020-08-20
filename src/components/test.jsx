import React, { useState, useEffect, Component } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3900";

class Time extends Component {
  state = {
    response: "",
  };

  // componentDidMount = () => {
  //   const socket = socketIOClient(ENDPOINT);
  //   console.log("s", socket);
  //   socket.on("FromAPI", (data) => {
  //     this.setState({ response: data });
  //   });
  // };

  render() {
    return (
      <div>
        <p>
          {/* It's <time dateTime={this.state.response}>{this.state.response}</time> */}
          <label>{this.state.response}</label>
        </p>
      </div>
    );
  }
}

export default Time;
// function Time() {
//   const [response, setResponse] = useState("");

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     socket.on("FromAPI", (data) => {
//       setResponse(data);
//     });
//   }, []);

//   return (
//     <p>
//       It's <time dateTime={response}>{response}</time>
//     </p>
//   );
// }

// export default Time;
