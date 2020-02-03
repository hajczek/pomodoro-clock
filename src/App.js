import React, { Component } from "react";
import ReactTimeout from "react-timeout";

let then = new Date();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      break: 5,
      session: 25,
      seconds: "00"
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
      session: 25,
      seconds: "00"
    });
  };

  countDown = () => {
    let now = new Date();

    let allTime = then.getTime();
    let leftTime = now.getTime();

    let currentTime = allTime - leftTime;

    let sec = Math.floor(currentTime / 1000);
    let min = Math.floor(sec / 60);

    min %= 60;
    sec %= 60;

    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    document.getElementById("minutes").textContent = min;
    document.getElementById("seconds").textContent = sec;

    // setTimeout(this.countdDown, 1000);
  };

  handleClick = e => {
    this.props.setTimeout(this.countDown, 1000);
  };

  render() {
    then.setMinutes(then.getMinutes() + this.state.session);
    then.setSeconds(then.getSeconds() + 0);
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
            <span id="minutes">{this.state.session} </span>:
            <span id="seconds"> {this.state.seconds}</span>
          </p>
        </div>
        <div className="box" id="timer-control">
          <button
            className="btn-big"
            id="start_stop"
            onClick={this.handleClick}
          >
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

export default ReactTimeout(App);
