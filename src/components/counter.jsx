import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  styles = {
    fontSize: 10
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-secondary m-2">
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 14, fontWeight: "bold" }}
          className="btn btn-primary m-2"
        >
          Increment
        </button>
      </div>
    );
  }

  formatCount() {
    return this.state.count == 0 ? "Zero" : this.state.count;
  }
}

export default Counter;
