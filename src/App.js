import React from 'react';
import './App.css';
import InputShortener from './InputShortener';
import BackgroundAnimate from './BackgroundAnimate';

function App() {
  return (
    <div className='container'>
      <InputShortener />
      <BackgroundAnimate />
    </div>
  );
}

export default App;
