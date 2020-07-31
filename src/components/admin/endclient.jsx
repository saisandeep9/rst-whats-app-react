import React, { Component } from "react";
// import axios from "axios";

import * as clintService from "../../services/endClintServices";

class endClient extends Component {
  state = {
    file: null,
    mobileNumber: [],
  };

  async componentDidMount() {
    const { data: mobileNumber } = await clintService.getclients();

    this.setState({ mobileNumber });
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
  render() {
    const { mobileNumber } = this.state;

    return (
      <div>
        <div onSubmit={this.OnFormSbumit}></div>
        <div className="row mt-2">
          <div className="col-6">
            <h1>upload file</h1>
            <input
              type="file"
              accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
              name="file"
              onChange={this.onChange}
            />
            <small id="emailHelp" class="form-text text-muted">
              Upload only excel file
            </small>
            <lu>
              <p class="h6 text-muted">
                <li>Mobile Numbers should be in `A` column and first Sheet</li>
              </p>
              <p class="h6 text-muted">
                <li>sheet name must me "Sheet1"</li>
              </p>
            </lu>
          </div>
          <div className="col-6">
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

        <div className=" col-2 col-md-7 mt-5  w-40 ">
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
