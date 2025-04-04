import React from "react";
import Sidebar from "../../../components/common/sideBar";
import EventCard from "../../../components/common/EventCard";

const Dashboard = () => {
  const events = [
    { title: "Meeting", time: "10:00 AM - 12:00 AM", color: "#2563eb", active: true },
    { title: "Meeting-2", time: "2:00 PM - 3:00 PM", color: "#2563eb", active: true },
    { title: "Appointment", time: "2:35 PM - 3:00 PM", color: "#4B5563", active: false },
  ];

  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <header>
          <h2>Event Types</h2>
          <button className="add-event">+ Add New Event</button>
        </header>
        <div className="event-list">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
