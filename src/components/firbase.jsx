import React, { Component } from "react";
import firebase from "./firebase0";
export class Fb extends Component {
  handleClick = () => {
    var recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    var number = "+918179600071";
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        var code = prompt("Enter the otp", "");

        if (code === null) return;

        e.confirm(code)
          .then(function (result) {
            console.log(result.user);

            document.querySelector("label").textContent +=
              result.user.phoneNumber + "Number verified";
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  render() {
    return (
      <div>
        <label></label>

        <div id="recaptcha"></div>

        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default Fb;
