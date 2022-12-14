import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element= {<Home/>} />
          <Route exact path='/sign-up' element = {<SignUp/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;