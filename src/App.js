import React from "react";

function App() {
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
    </div>
  );
}

export default App;
