// import React, { useState, useEffect } from "react";
// import Sidebar from "../../../components/common/sideBar";
// import EventCard from "../../../components/common/EventCard";
// import AddEventForm from "../../CreateEventForm";

// const Dashboard = () => {
//   const [showForm, setShowForm] = useState(false);
//   const [showEvents, setShowEvents] = useState(true);
//   const [events, setEvents] = useState([]);
//   const [formData, setFormData] = useState({});

//   // 🔄 Fetch events from backend
//   useEffect(() => {
//     fetch("http://localhost:5000/api/events")
//       .then((res) => res.json())
//       .then((data) => setEvents(data))
//       .catch((err) => console.error("Error fetching events", err));
//   }, []);

//   const handleEventCreated = (newEvent) => {
//     setEvents((prev) => [...prev, newEvent]);
//     setShowForm(false);
//     setShowEvents(true); // Show cards after form submit
//   };
//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:5000/api/events/${id}`, { method: "DELETE" });
//     setEvents(events.filter(e => e._id !== id));
//   };

//   const handleCopy = (event) => {
//     const text = `${event.topic} - ${event.time} ${event.meridian}`;
//     navigator.clipboard.writeText(text);
//     alert("Event details copied!");
//   };

//   const handleToggle = async (id) => {
//     const updatedEvents = events.map(e =>
//       e._id === id ? { ...e, active: !e.active } : e
//     );
//     setEvents(updatedEvents);

//     const updated = updatedEvents.find(e => e._id === id);
//     await fetch(`http://localhost:5000/api/events/${id}`, {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ active: updated.active }),
//     });
//   };

//   const handleEdit = (eventData) => {
//     setFormData(eventData);
//     setShowForm(true);
//     setShowEvents(false);
//   };

//   return (
//     <div className="dashboard">
//       <Sidebar
//         onCreateClick={() => {
//           setShowForm(true);
//           setShowEvents(false);
//         }}
//         onViewEventsClick={() => {
//           setShowForm(false);
//           setShowEvents(true);
//         }}
//       />

//       <main>
//         {showForm && (
//           <AddEventForm
//             onClose={() => setShowForm(false)}
//             onEventCreated={handleEventCreated}
//           />
//         )}

//         {showEvents && (
//           <div className="event-list">
//             {events.map((event, index) => (
//               <EventCard
//                 key={event._id}
//                 title={event.topic}
//                 time={`${event.time} ${event.meridian}`}
//                 color={event.color || "#2563eb"}
//                 active={event.active} // You'll need to add this in your schema
//                 onDelete={() => handleDelete(event._id)}
//                 onEdit={() => handleEdit(event)}
//                 onCopy={() => handleCopy(event)}
//                 onToggle={() => handleToggle(event._id)}
//               />
//             ))}
//           </div>
//         )}

//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// ✅ Dashboard.jsx
import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/common/sideBar";
import EventCard from "../../../components/common/EventCard";
import CreateEventForm from "../../CreateEventForm";
import { DashBoardTemplate } from "../../common/DashBoardTemplate";

const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("❌ Error fetching events:", err));
  }, []);

  const handleEventCreated = (newEvent) => {
    setEvents((prev) => [...prev, newEvent]);
    setShowForm(false);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/api/events/${id}`, { method: "DELETE" });
    setEvents(events.filter((e) => e._id !== id));
  };

  const handleCopy = (event) => {
    const text = `${event.topic} - ${event.time} ${event.meridian}`;
    navigator.clipboard.writeText(text);
    alert("Event details copied!");
  };

  const handleToggle = async (id) => {
    const updatedEvents = events.map((e) =>
      e._id === id ? { ...e, active: !e.active } : e
    );
    setEvents(updatedEvents);

    const updated = updatedEvents.find((e) => e._id === id);
    await fetch(`http://localhost:5000/api/events/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ active: updated.active }),
    });
  };

  const handleEdit = (eventData) => {
    setFormData(eventData);
    setShowForm(true);
  };

  return (
    <div className="dashboard">
    <DashBoardTemplate  onCreateClick={() => {
    setShowForm(true);
    setFormData(null);
  }}>
          <div className="event-list">
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
        </div>
    
        {showForm && (
          <CreateEventForm
            onClose={() => setShowForm(false)}
            onEventCreated={handleEventCreated}
            formData={formData}
          />
        )}

  </DashBoardTemplate>
     
    </div>
  );
};

export default Dashboard;
