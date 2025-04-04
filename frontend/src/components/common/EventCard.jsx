import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EventCard = ({ title, time, color, active }) => {
  return (
    <div className="event-card" style={{ borderTopColor: color }}>
      <div className="header">
        <h3>{title}</h3>
        <FaEdit className="edit-icon" />
      </div>
      <p className="time">{time}</p>
      <p className="desc">1hr. Group meeting</p>
      <div className="footer">
        <input type="checkbox" checked={active} readOnly />
        <FaTrash className="delete-icon" />
      </div>
    </div>
  );
};

export default EventCard;
