import React from "react";
import { FaCalendarAlt, FaCog, FaClock } from "react-icons/fa";
import { TbCalendarEvent } from "react-icons/tb";
import profileImage from "../../assets/images/display.avif";
import LogoSection from "./Logo";
import { Link } from "react-router-dom";

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
        <li>
          <Link to={'/event'} onClick={onViewEventsClick} style={{ cursor: "pointer" }}>
            <TbCalendarEvent /> Events
          </Link>
          </li>
          <li>
          <Link to={'/bookings'}>
            <FaCalendarAlt /> Bookings
          </Link>
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
       <Link to={'/create_event_form'}> + Create</Link>
      </button>

      <div className="profile-section">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <span className="username">{displayName}</span>
      </div>
    </aside>
  );
};

export default Sidebar;
