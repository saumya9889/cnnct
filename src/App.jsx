import React from 'react';
import "./assets/styles/global.scss";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/Pages/SignUp Page';
import LogIn from './components/Pages/LogIn Page';
import { Preferences } from './components/Prefernces';

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/preferences" element={<Preferences />} />
      </Routes>
    </Router>  
    </>
  )
}

export default App
