import React from "react";
import { FaCalendarAlt, FaCog, FaClock } from "react-icons/fa";
import { TbCalendarEvent } from "react-icons/tb";
import profileImage from "../../assets/images/display.avif";

const Sidebar = () => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const displayName = userData.username || userData.firstName || "User";
  
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
            <FaClock /> History
          </li>
          <li>
            <FaCog /> Settings
          </li>
        </ul>
      </nav>
      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="username">{displayName}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
