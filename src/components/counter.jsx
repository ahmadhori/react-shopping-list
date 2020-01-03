import React, { Component } from "react";
class Counter extends Component {
  //state = {
  //  id: this.props.id,
  //  count: this.props.count
  //};

  styles = {
    fontSize: 12,
    fontWeight: "bold"
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div className="col-sm">{this.props.children}</div>
        <div className="col-sm">
          <span style={this.styles} className={this.counterClasses()}>
            {this.formatCount()}
          </span>
        </div>
        <div className="col-sm">
          <button
            style={{ fontSize: 14, fontWeight: "bold" }}
            className="btn btn-primary m-2"
            onClick={this.props.incrementBtnClick}
          >
            +
          </button>
        </div>
        <div className="col-sm">
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={this.props.deleteBtnClick}
          >
            X
          </button>
        </div>
      </React.Fragment>
    );
  }

  formatCount() {
    return this.props.count === 0 ? "Zero" : this.props.count;
  }

  counterClasses() {
    return this.props.count === 0
      ? "btn btn-danger m-2"
      : "btn btn-warning m-2";
  }
}

export default Counter;
