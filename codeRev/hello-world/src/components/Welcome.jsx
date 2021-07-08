import React, { Component } from "react";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.name = props.name;
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.name}!</h1>
      </div>
    );
  }
}

export default Welcome;
