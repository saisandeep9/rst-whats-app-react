import React, { Component } from "react";

import * as driversService from "../../services/driversService";

class Drivers extends Component {
  state = {
    drivers: [],
  };

  async componentDidMount() {
    const { data: drivers } = await driversService.getdrivers();

    this.setState({ drivers });
  }

  render() {
    const { drivers } = this.state;

    console.log(drivers);
    return (
      <div className="container mt-3 box w-40">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email id</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((driver) => (
              <tr key={driver._id}>
                <td> {driver.fristName}</td>
                <td> {driver.lastName}</td>
                <td> {driver.mobileNumber}</td>
                <td> {driver.emailId}</td>
              </tr>

              // <tr>
              //   <th scope="row">1</th>
              //   <td>Mark</td>
              //   <td>Otto</td>
              //   <td>@mdo</td>
              // </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Drivers;
