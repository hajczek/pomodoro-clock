import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div id="break-label">
          <p>Break length</p>
          <button id="break-decrement">-</button>
          <span id="break-length">5</span>
          <button id="break-increment">+</button>
        </div>
        <div id="session-label">
          <p>Session length</p>
          <button id="session-decrement">-</button>
          <span id="session-length">25</span>
          <button id="session-increment">+</button>
        </div>
        <div id="timer-label">
          <h3>Session</h3>
          <p id="time-left">mm:ss</p>
        </div>
        <div id="timer-control">
          <button id="start_stop">Start/Stop</button>
          <button id="reset">Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
