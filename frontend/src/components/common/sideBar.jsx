import React from "react";
import { FaCalendarAlt, FaCog, FaClock } from "react-icons/fa";
import { TbCalendarEvent } from "react-icons/tb";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">CNCT</div>
      <nav>
        <ul>
          <li>
            <TbCalendarEvent /> Events
          </li>
          <li>
            <FaCalendarAlt /> Bookings
          </li>
                            
          <li>
                <FaClock /> Availability
          </li>
          <li>
            <FaCog /> Settings
          </li>
        </ul>
      </nav>
      <button className="create-btn">+ Create</button>
      <div className="user">
        <img src="https://via.placeholder.com/40" alt="User" />
        <span>sarthak pal</span>
      </div>
    </aside>
  );
};

export default Sidebar;
