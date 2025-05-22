// src/App.js
import React from 'react';
import Map from './components/Map';
import FirstPage from './pages/First';
import SecondPage from './pages/Second';

function App() {
  return (
    <div className="App">
      {/* <h1>Dotted Map Example</h1>
      <Map /> */}
      <FirstPage />
      <SecondPage />
    </div>
  );
}

export default App;
