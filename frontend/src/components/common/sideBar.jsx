import React from "react";
import { FaCalendarAlt, FaCog, FaClock } from "react-icons/fa";
import { TbCalendarEvent } from "react-icons/tb";
import profileImage from "../../assets/images/display.avif";
import LogoSection from "./Logo";

const Sidebar = ({ onCreateClick, onViewEventsClick }) => {
  const userData = JSON.parse(localStorage.getItem("userData")) || {};
  const displayName = userData.username || userData.firstName || "User";

  return (
    <aside className="sidebar">
      <div className="logo">
        <LogoSection />
      </div>

      <nav>
        <ul>
          <li onClick={onViewEventsClick} style={{ cursor: "pointer" }}>
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

      <button className="create-btn" onClick={onCreateClick}>
        + Create
      </button>

      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="username">{displayName}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
