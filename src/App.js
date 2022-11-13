import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Main from './Main';
import AboutUs from './Pages/AboutUs';
import Error from './Pages/Error';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/error" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
