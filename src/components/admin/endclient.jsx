import React, { Component } from "react";
import axios from "axios";
import Joi from "joi-browser";
import Validation from "../common/validation";

import * as clintService from "../../services/endClintServices";

class endClient extends Validation {
  state = {
    file: null,
    mobileNumber: [],
    states: [],
    state: "",
  };

  schema = {
    state: Joi,
  };

  async componentDidMount() {
    const { data: mobileNumber } = await clintService.getclients();

    let { data: items } = await axios.get("http://localhost:3900/api/states");
    console.log("list", items);
    this.setState({ mobileNumber, states: items });
  }

  onChange = async (e) => {
    let files = e.target.files[0];
    console.log("file", files);
    console.log("file2", files.name);

    let data = new FormData();

    data.append("file", files, files.name);

    console.log("form data", data);

    // const URL = "http://localhost:3900/api/clients";

    // const URL = "https://rtsbooking.herokuapp.com/api/clients";
    const response = await clintService.uploade(data);

    // const response = axios.post(URL, data);
    if (response) {
      console.log(response);
    }

    // let reader = new FileReader();
    // reader.readAsDataURL(files);

    // reader.onload = (e) => {
    //   const URL = "http://localhost:3900/api/clients";
    //   const formData = { file: e.target.result };
    //   console.log(formData);

    //   axios.post(URL, formData);
    // };
  };

  doSubmit = async () => {
    console.log("data", this.state);
    // const success = await userService.register(this.state.data);
    // const success = await usersService.createusers(this.state.data);
    // if (success) {
    //   // window.location = "/";
    //   toast.success("Successfully registrade");
    //   this.props.history.push("/");
    // }
  };
  render() {
    const { mobileNumber, states } = this.state;

    return (
      <div>
        {/* <div onSubmit={this.OnFormSbumit}></div> */}
        <div className="row m-1  ">
          <div className="col-md-8 m-1  col-12">
            <h1>upload file</h1>
            <input
              type="file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              name="file"
              onChange={this.onChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              Upload only excel file
            </small>
            <ul>
              <p className="h6 text-muted">
                <li>Mobile Numbers should be in `A` column and first Sheet</li>
              </p>
              <p className="h6 text-muted">
                <li>sheet name must me "Sheet1"</li>
              </p>
            </ul>

            <select name="states">
              {states.map((state) => (
                <option
                  key={state._id}
                  value={state.name}
                  onChange={this.handleChange}
                >
                  {state.stateName}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-3 ml-1 ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/test-5823c.appspot.com/o/exl.JPG?alt=media&token=07148d8e-11b1-4ad9-af26-8d70f124395d"
              alt="Excel file"
              width="200"
              height="250"
            />
          </div>
        </div>

        {/* <div className="box">
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div> */}

        <div className=" col-12  col-md-7 mt-5  w-40 ">
          <table className="table table-striped   ">
            <thead>
              <tr>
                <th scope="col">Number</th>
                <th scope="col">Date of Entry</th>
              </tr>
            </thead>
            <tbody>
              {mobileNumber.map((number) => (
                <tr key={number._id}>
                  <td> {number.mobileNumber}</td>
                  <td>
                    {" "}
                    <>
                      <span>{new Date(number.date).toLocaleDateString()} </span>
                      <br />
                      {/* <span> {new Date(number.date).toLocaleTimeString()}</span> */}
                    </>
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default endClient;
