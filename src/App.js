import React from 'react';
import guitarLogo from './guitar-logo.svg';
import GuitarString from './GuitarString';
import BridgeHole from './BridgeHole';
import SoundHole from './SoundHole';
import './App.css';

function App() {
  let lineX = 95;
  let r = 5;
  let topBridgeY = 10;
  let bottomBridgeY = 300;

  return (
    <div className="App">
      <header className="App-header">
        <svg className="App-guitar" height={310} width={350}>
          <SoundHole className="App-guitar-soundhole" />
          
          <BridgeHole className="App-guitar-bridgehole" x={lineX} y={topBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+30} y={topBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+60} y={topBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+90} y={topBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+120} y={topBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+150} y={topBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX} y={bottomBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+30} y={bottomBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+60} y={bottomBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+90} y={bottomBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+120} y={bottomBridgeY} />
          <BridgeHole className="App-guitar-bridgehole" x={lineX+150} y={bottomBridgeY} />
          
          <GuitarString className="App-guitar-string" x={lineX} y={topBridgeY} />
          <GuitarString className="App-guitar-string" x={lineX+30} y={topBridgeY} />
          <GuitarString className="App-guitar-string" x={lineX+60} y={topBridgeY} />
          <GuitarString className="App-guitar-string" x={lineX+90} y={topBridgeY} />
          <GuitarString className="App-guitar-string" x={lineX+120} y={topBridgeY} />
          <GuitarString className="App-guitar-string" x={lineX+150} y={topBridgeY} />
        </svg>
        <p className="App-guitar-chord-root">C</p>
      </header>
    </div>
  );
}

export default App;
