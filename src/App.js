import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './Main';
import AboutUs from './AboutUs';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
