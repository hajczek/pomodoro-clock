import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
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

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div className="box" id="break-label">
          <p>Break length</p>
          <button className="btn-small" id="break-decrement">
            -
          </button>
          <span id="break-length">{this.state.breakLength}</span>
          <button className="btn-small" id="break-increment">
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
          <button className="btn-big" id="reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
