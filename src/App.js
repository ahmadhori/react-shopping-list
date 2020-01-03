import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 10 },
      { id: 3, value: 20 },
      { id: 4, value: 30 }
    ]
  };

  handleDelete = id => {
    console.log("Delete handeled ", id);
    const x = this.state.counters.filter(x => x.id !== id);
    this.setState({ counters: x });
  };

  handleIncrement = id => {
    console.log("Increment handeled ", id, " done");

    const xx = this.state.counters.map(x => {
      if (x.id === id) {
        var l = x;
        l.value = l.value + 1;
        return l;
      } else {
        return x;
      }
    });
    this.setState({ counters: xx });
  };

  handleReset = () => {
    const xx = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    console.log(xx);
    this.setState({ counters: xx });
  };

  calcSum() {
    let j = 0;
    this.state.counters.forEach(x => (j = j + x.value));
    return j;
  }

  render() {
    return (
      <React.Fragment>
        <Navbar sum={this.calcSum()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
