import './App.css';
import React from 'react';
import initOpenCascade from "opencascade.js";


function App() {
  React.useEffect(() => {
    console.log("Loading OpenCascade...");
    initOpenCascade().then(oc => {
      // Check out the examples on how to use this library!
      console.log("OC is loaded");
    });
    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>
    </div>
  );
}

export default App;
