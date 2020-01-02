import React from 'react';
import guitarLogo from './guitar-logo.svg';
import './App.css';

function App() {
  let lineX = 95;
  let r = 5;
  let topBridgeY = 10;
  let bottomBridgeY = 300;

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={guitarLogo} className="App-logo" alt="logo" /> */}
        <svg className="App-guitar" height={310} width={350}>
          <circle className="App-guitar-soundhole" />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX} cy={topBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+30} cy={topBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+60} cy={topBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+90} cy={topBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+120} cy={topBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+150} cy={topBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX} cy={bottomBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+30} cy={bottomBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+60} cy={bottomBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+90} cy={bottomBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+120} cy={bottomBridgeY} />
          <circle className="App-guitar-bridgehole" r={r} cx={lineX+150} cy={bottomBridgeY} />
          <line className="App-guitar-string" x1={lineX} y1={topBridgeY} x2={lineX} y2={bottomBridgeY} />
          <line className="App-guitar-string" x1={lineX+30} y1={topBridgeY} x2={lineX+30} y2={bottomBridgeY} />
          <line className="App-guitar-string" x1={lineX+60} y1={topBridgeY} x2={lineX+60} y2={bottomBridgeY} />
          <line className="App-guitar-string" x1={lineX+90} y1={topBridgeY} x2={lineX+90} y2={bottomBridgeY} />
          <line className="App-guitar-string" x1={lineX+120} y1={topBridgeY} x2={lineX+120} y2={bottomBridgeY} />
          <line className="App-guitar-string" x1={lineX+150} y1={topBridgeY} x2={lineX+150} y2={bottomBridgeY} />
        </svg>
        <p className="App-guitar-chord-root">C</p>
      </header>
    </div>
  );
}

export default App;
