import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        {this.props.counters.map(counter => (
          <div className="row" key={counter.id}>
            <Counter
              id={counter.id}
              count={counter.value}
              deleteBtnClick={() => this.props.onDelete(counter.id)}
              incrementBtnClick={() => this.props.onIncrement(counter.id)}
              decrementBtnClick={() => this.props.onDecrement(counter.id)}
            >
              <h2># {counter.id}</h2>
            </Counter>
          </div>
        ))}
        <div className="row">
          <button
            className="btn btn-primary btn-sm m-2"
            onClick={this.props.onReset}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counters;
