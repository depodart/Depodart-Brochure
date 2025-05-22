// src/App.js
import React from 'react';
import FirstPage from './pages/First';
import SecondPage from './pages/Second';
import ThirdPage from './pages/Third';
import LastPage from './pages/Last';
function App() {
  return (
    <div className="App">
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <LastPage />
    </div>
  );
}

export default App;
