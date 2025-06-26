import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";

const formatTimeRange = (start, meridian, duration) => {
  let [hours, minutes] = start.split(":").map(Number);
  if (meridian === "PM" && hours !== 12) hours += 12;
  if (meridian === "AM" && hours === 12) hours = 0;

  let end = new Date(0, 0, 0, hours, minutes);
  if (duration.includes("30")) end.setMinutes(end.getMinutes() + 30);
  else if (duration.includes("1 hour")) end.setHours(end.getHours() + 1);
  else if (duration.includes("2")) end.setHours(end.getHours() + 2);

  const pad = (num) => String(num).padStart(2, "0");
  const formatMeridian = (h) => (h >= 12 ? "PM" : "AM");
  const formatHour = (h) => (h % 12 === 0 ? 12 : h % 12);

  const endHour = end.getHours();
  const endMinute = end.getMinutes();

  return `${start} ${meridian} – ${pad(formatHour(endHour))}:${pad(
    endMinute
  )} ${formatMeridian(endHour)}`;
};

const EventCard = ({ event, onEdit, onDelete, onCopy, onToggle }) => {
  const {
    topic,
    time,
    meridian,
    duration,
    active,
    description = "1hr. Group meeting",
    date,
  } = event;

  const formattedTime = formatTimeRange(time, meridian, duration);

  return (
    <>
    <div
      className="event-card"
      style={{ borderTopColor: active ? "#2563eb" : "#4B5563" }}
    >
      <div className="header">
        <h3>{topic}</h3>
        <FaEdit className="edit-icon" onClick={() => onEdit(event)} />
      </div>
      <p className="date">Friday, 28 Feb</p>
      <p className="time" style={{ color: "#2563eb" }}>
        {formattedTime}
      </p>
      <p className="desc">{description}</p>
      <div className="footer">
        <label className="switch">
          <input
            type="checkbox"
            checked={active}
            onChange={() => onToggle(event._id)}
          />
          <span className="slider"></span>
        </label>
        <LuCopy onClick={() => onCopy(event)} />
        <FaTrash className="delete-icon" onClick={() => onDelete(event._id)}/>
        </div>

    </div>
    </>
  );
};

export default EventCard;
