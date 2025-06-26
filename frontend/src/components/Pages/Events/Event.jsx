import React, { useEffect, useState } from 'react'
import { DashBoardTemplate } from '../../common/DashBoardTemplate'
import EventCard from '../../common/EventCard';

export const Event = () => {
      const [events, setEvents] = useState([]);
      const [showForm, setShowForm] = useState(false);
      const [formData, setFormData] = useState(null);
    
      useEffect(() => {
        fetch("http://localhost:5000/api/events")
          .then((res) => res.json())
          .then((data) => setEvents(data))
          .catch((err) => console.error("❌ Error fetching events:", err));
      }, []);

  return (
    <DashBoardTemplate
   headerTitle = 'Event Type'
   headerSubTitle = 'Create events to share for people to book on your calendar.'
    >
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event} // ✅ Fix applied here
              onDelete={() => handleDelete(event._id)}
              onCopy={() => handleCopy(event)}
              onToggle={() => handleToggle(event._id)}
              onEdit={() => handleEdit(event)}
            />
          ))}
        
    </DashBoardTemplate>
  )
}
