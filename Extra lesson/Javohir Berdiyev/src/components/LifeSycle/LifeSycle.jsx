import React, { Component } from "react";
import User from "../User/User";

export default class LifeSycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    this.setState({ users });
  }
  render() {
    return (
      <div>
        <User data={this.state.users} />
      </div>
    );
  }
}
