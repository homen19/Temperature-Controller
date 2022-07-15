import './style.css';
import React, { useState } from 'react';
const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(18);
  return (
    <>
    <div className="app-container">
      <h1>Temperature Controller</h1>
      <div className="app-display">
          <h1>{temperatureValue} &#x2103;</h1>
      </div>
      <div className="button">
        <div><button onClick={()=>setTemperatureValue(temperatureValue+1)} >+</button></div>
        <div><button onClick={()=>setTemperatureValue(temperatureValue - 1)} >-</button></div>
      </div>

    </div>
    <p>Homen Nath</p>
    </>
   
  );
}

export default App;
