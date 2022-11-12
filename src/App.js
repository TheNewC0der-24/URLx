import React from 'react';
import './App.css';
import InputShortener from './InputShortener';
import BackgroundAnimate from './BackgroundAnimate';
import Result from './Result';

function App() {
  return (
    <>
      <div className='about-button'>
        <a className="waves-effect waves-light btn">About Us</a>
      </div>
      <div className='container'>
        <InputShortener />
        <BackgroundAnimate />
        <Result />
      </div>
    </>
  );
}

export default App;
