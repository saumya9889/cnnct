import React, { useState } from 'react';
import Sidebar from './sideBar';
import AddEventForm from './AddEventForm';

const EventPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="event-page">
      <Sidebar onCreateClick={() => setShowForm(true)} /> 
      <main className="main-content">
        {showForm && <AddEventForm onClose={() => setShowForm(false)} />} 
      </main>
    </div>
  );
};

export default EventPage;
