import React, { Component } from "react";
import axios from "axios";

class endClient extends Component {
  state = {
    file: null,
  };

  onChange(e) {
    let files = e.target.files[0];
    console.log("file", files);
    console.log("file2", files.name);

    let data = new FormData();

    data.append("myFile", files);

    console.log("form data", data);

    const URL = "http://localhost:3900/api/clients";

    axios.post(URL, { files });

    // let reader = new FileReader();
    // reader.readAsDataURL(files[0]);

    // reader.onload = (e) => {
    //   const URL = "http://localhost:3900/api/clients";
    //   const formData = { file: e.target.result };
    //   console.log(formData);

    //   return axios.post(URL, formData);
    // };
  }
  render() {
    return (
      <div>
        <div onSubmit={this.OnFormSbumit}>
          <h1>upload file</h1>
        </div>

        <input type="file" name="file" onChange={this.onChange} />
        {/* <div className="box">
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>Upload!</button>
        </div> */}
      </div>
    );
  }
}

export default endClient;
