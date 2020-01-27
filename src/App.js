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
        <div class="box" id="break-label">
          <p>Break length</p>
          <button class="btn-small" id="break-decrement">
            -
          </button>
          <span id="break-length">{this.state.breakLength}</span>
          <button class="btn-small" id="break-increment">
            +
          </button>
        </div>
        <div class="box" id="session-label">
          <p>Session length</p>
          <button class="btn-small" id="session-decrement">
            -
          </button>
          <span id="session-length">{this.state.session}</span>
          <button class="btn-small" id="session-increment">
            +
          </button>
        </div>
        <div class="box" id="timer-label">
          <h3>Session</h3>
          <p class="time" id="time-left">
            {this.state.sessionSet}
          </p>
        </div>
        <div class="box" id="timer-control">
          <button class="btn-big" id="start_stop">
            Start/Stop
          </button>
          <button class="btn-big" id="reset">
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default App;
