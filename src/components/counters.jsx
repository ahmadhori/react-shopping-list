import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            count={counter.value}
            deleteBtnClick={() => this.props.onDelete(counter.id)}
            incrementBtnClick={() => this.props.onIncrement(counter.id)}
          >
            <h2>Counter {counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
