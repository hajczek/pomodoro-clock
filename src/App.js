import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25
    };
  }

  sessionDecrement = () => {
    this.setState({
      session: this.state.session - 1
    });
  };

  sessionIncrement = () => {
    this.setState({
      session: this.state.session + 1
    });
  };

  breakDecrement = () => {
    this.setState({
      break: this.state.break - 1
    });
  };

  breakIncrement = () => {
    this.setState({
      break: this.state.break + 1
    });
  };

  resetState = () => {
    this.setState({
      break: 5,
      session: 25
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="box" id="break-label">
          <p>Break length</p>
          <button
            className="btn-small"
            id="break-decrement"
            onClick={this.breakDecrement}
          >
            -
          </button>
          <span id="break-length">{this.state.break}</span>
          <button
            className="btn-small"
            id="break-increment"
            onClick={this.breakIncrement}
          >
            +
          </button>
        </div>
        <div className="box" id="session-label">
          <p>Session length</p>
          <button
            className="btn-small"
            id="session-decrement"
            onClick={this.sessionDecrement}
          >
            -
          </button>
          <span id="session-length">{this.state.session}</span>
          <button
            className="btn-small"
            id="session-increment"
            onClick={this.sessionIncrement}
          >
            +
          </button>
        </div>
        <div className="box" id="timer-label">
          <h3>Session</h3>
          <p className="time" id="time-left">
            {this.state.session}
          </p>
        </div>
        <div className="box" id="timer-control">
          <button className="btn-big" id="start_stop">
            Start/Stop
          </button>
          <button className="btn-big" id="reset" onClick={this.resetState}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
