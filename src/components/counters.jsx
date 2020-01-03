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

  handleDelete(id) {
    console.log("Delete handeled ", id);
    const x = this.state.counters.filter(x => x.id !== id);
    this.setState({ counters: x });
  }

  handleReset = () => {
    const xx = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log(xx);
    this.setState({ counters: xx });
  };

  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.handleReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            id={counter.id}
            count={counter.value}
            onClick={() => this.handleDelete(counter.id)}
          >
            <h2>Counter {counter.id}</h2>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
