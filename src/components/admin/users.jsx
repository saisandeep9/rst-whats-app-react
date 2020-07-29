import React, { Component } from "react";

import * as usersService from "../../services/usersService";

class Users extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
    const { data: users } = await usersService.getusers();

    this.setState({ users });
  }

  render() {
    const { users } = this.state;

    return (
      <div className="container mt-md-3 bo w-40">
        <table className="table table-striped col-4 col-md-9">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Email id</th>
              <th scope="col">Messages burned</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td> {user.fristName}</td>
                <td> {user.lastName}</td>
                <td> {user.mobileNumber}</td>
                <td> {user.emailId}</td>
                <td> {user.burnedMessages}</td>
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

export default Users;
