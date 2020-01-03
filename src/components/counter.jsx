import React, { Component } from "react";
class Counter extends Component {
  state = {
    id: this.props.id,
    count: this.props.count
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span style={this.styles} className={this.counterClasses()}>
          {this.formatCount()}
        </span>
        <button
          style={{ fontSize: 14, fontWeight: "bold" }}
          className="btn btn-primary m-2"
          onClick={this.incrementBtnClick}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={this.props.onClick}
        >
          Delete
        </button>
      </div>
    );
  }

  incrementBtnClick = () => {
    console.log("Hello from increment btn", this);
    this.setState({ count: this.state.count + 1 });
  };

  formatCount() {
    return this.state.count === 0 ? "Zero" : this.state.count;
  }

  counterClasses() {
    return this.state.count === 0
      ? "btn btn-danger m-2"
      : "btn btn-warning m-2";
  }
}

export default Counter;
