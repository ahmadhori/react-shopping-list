import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 20 },
      { id: 4, value: 30 }
    ]
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} id={counter.id} count={counter.value}>
            <h2>Counter {counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
