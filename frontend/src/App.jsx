import React from 'react';
import "./assets/styles/global.scss";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './components/Pages/SignUp Page';
import LogIn from './components/Pages/LogIn Page';
import { Preferences } from './components/Prefernces';
import Dashboard from './components/Pages/DashBoard';
import CreateEvent from './components/CreateEventForm';
import ProtectedRoute from './components/ProtectedRoutes';
import { Event } from './components/Pages/Events/Event';
import { Bookings } from './components/Pages/Bookings/bookings';
import CreateEventForm from './components/CreateEventForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<SignUp />} />
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
        <Route 
          path="/event" 
          element={ 
              <Event /> 
          } 
        />
          <Route 
          path="/bookings" 
          element={ 
              <Bookings /> 
          } 
        />
            <Route 
          path="/create_event_form" 
          element={ 
              <CreateEventForm /> 
          } 
        />
        <Route 
          path="/create-event" 
          element={
            <ProtectedRoute>
              <CreateEvent />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
