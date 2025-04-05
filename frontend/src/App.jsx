import React from 'react';
import "./assets/styles/global.scss";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/Pages/SignUp Page';
import LogIn from './components/Pages/LogIn Page';
import { Preferences } from './components/Prefernces';
import Dashboard from './components/Pages/DashBoard';
import ProtectedRoute from './components/ProtectedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        
        <Route 
          path="/preferences" 
          element={
            <ProtectedRoute>
              <Preferences />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
