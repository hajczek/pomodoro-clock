import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <div id="break-label">
        <p>Break length</p>
        <button id="break-decrement">-</button>
      </div>
      <div id="session-label">
        <p>Session length</p>
        <button id="session-decrement">-</button>
      </div>
    </div>
  );
}

export default App;
