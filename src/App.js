import React from 'react';
import guitarLogo from './guitar-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={guitarLogo} className="App-logo" alt="logo" /> */}
        <svg className="App-guitar" height={310} width={350}>
          <circle className="App-guitar-soundhole" />
          <circle className="App-guitar-bridgehole" r={5} cx={95} cy={10} />
          <circle className="App-guitar-bridgehole" r={5} cx={125} cy={10} />
          <circle className="App-guitar-bridgehole" r={5} cx={155} cy={10} />
          <circle className="App-guitar-bridgehole" r={5} cx={185} cy={10} />
          <circle className="App-guitar-bridgehole" r={5} cx={215} cy={10} />
          <circle className="App-guitar-bridgehole" r={5} cx={245} cy={10} />
          <circle className="App-guitar-bridgehole" r={5} cx={95} cy={300} />
          <circle className="App-guitar-bridgehole" r={5} cx={125} cy={300} />
          <circle className="App-guitar-bridgehole" r={5} cx={155} cy={300} />
          <circle className="App-guitar-bridgehole" r={5} cx={185} cy={300} />
          <circle className="App-guitar-bridgehole" r={5} cx={215} cy={300} />
          <circle className="App-guitar-bridgehole" r={5} cx={245} cy={300} />
          <line className="App-guitar-string" x1={95} y1={10} x2={95} y2={300} />
          <line className="App-guitar-string" x1={125} y1={10} x2={125} y2={300} />
          <line className="App-guitar-string" x1={155} y1={10} x2={155} y2={300} />
          <line className="App-guitar-string" x1={185} y1={10} x2={185} y2={300} />
          <line className="App-guitar-string" x1={215} y1={10} x2={215} y2={300} />
          <line className="App-guitar-string" x1={245} y1={10} x2={245} y2={300} />
        </svg>
        <p className="App-guitar-chord-root">C</p>
      </header>
    </div>
  );
}

export default App;
