import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      session: 25,
      sessionSet: 25
    };
  }

  setSession = () => {
    const d = new Date();
    let minutes = Number(this.state.session);
    d.setMinutes(minutes);
    let sessionSet = d.getMinutes();
    this.setState = {
      sessionSet: sessionSet
    };
  };

  render() {
    return (
      <div className="App">
        <h1>Pomodoro Clock</h1>
        <div id="break-label">
          <p>Break length</p>
          <button id="break-decrement">-</button>
          <span id="break-length">{this.state.breakLength}</span>
          <button id="break-increment">+</button>
        </div>
        <div id="session-label">
          <p>Session length</p>
          <button id="session-decrement">-</button>
          <span id="session-length">{this.state.session}</span>
          <button id="session-increment">+</button>
        </div>
        <div id="timer-label">
          <h3>Session</h3>
          <p id="time-left">{this.state.sessionSet}</p>
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
