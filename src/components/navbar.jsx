import React, { Component } from "react";

class Navbar extends Component {
  render = () => {
    console.log("Hellooooo", this);

    return (
      <nav className="navbar navbar-light bg-light">
        <span className="btn btn-danger m-2">{this.props.sum}</span>
      </nav>
    );
  };
}

export default Navbar;
