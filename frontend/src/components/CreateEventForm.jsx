
import React, { useState, useEffect } from "react";
// import { CommonTemplate } from "./common/CommonTemplate";
import { DashBoardTemplate } from "./common/DashBoardTemplate";

const CreateEventForm = ({ onClose, onEventCreated, formData: initialData = {} }) => {
  const [hostOptions, setHostOptions] = useState(["Saumya"]);

  const [formData, setFormData] = useState({
    topic: "",
    password: "",
    host: "",
    description: "",
    date: "",
    time: "",
    meridian: "AM",
    timezone: "",
    duration: "",
    active: "true"
  });

  // 🔁 Agar edit mode me formData aaye ke liye set 
  useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setFormData(initialData);
    }
  }, [initialData]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        const data = await res.json();
        console.log("✅ Event saved:", data);
        onEventCreated(data); // 🔁 Send event to Dashboard
      } else {
        console.error("❌ Failed to save event");
      }
    } catch (error) {
      console.error("❌ Error while saving:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHost = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "host" && value && !hostOptions.includes(value)) {
      setHostOptions((prev) => [...prev, value]);
    }
  };

  return (
    <>
     <DashBoardTemplate>
    <div className="container">
      <div className="head-title">
        <h2 className="heading">Create Event</h2>
        <p className="subtitle">Create events to share for people to book on your calendar</p>
      </div>

      <div className="event-form-container">
        <h2>Add Event</h2>
        <div style={{ borderBottom: "2px solid #ccc" }}></div>
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label>Event Topic <span>*</span></label>
            <input type="text" name="topic" value={formData.topic} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="text" name="password" value={formData.password} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Host name<span>*</span></label>
            <select name="host" value={formData.host} onChange={handleHost}>
              {hostOptions.map((host, index) => (
                <option key={index} value={host}>{host}</option>
              ))}
              <option value="">Add new host</option>
            </select>
            {formData.host === "" && (
              <input type="text" name="host" value={formData.host} onChange={handleHost} />
            )}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} />
          </div>

          <div style={{ borderBottom: "2px solid #ccc" }}></div>

          <div className="form-group">
            <label>Date and Time<span>*</span></label>
            <div className="datetime-row">
              <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
              <select name="time" value={formData.time} onChange={handleChange}>
                <option>02:00</option>
                <option>02:30</option>
                <option>03:00</option>
              </select>
              <select name="meridian" value={formData.meridian} onChange={handleChange}>
                <option>AM</option>
                <option>PM</option>
              </select>
              <select name="timezone" value={formData.timezone} onChange={handleChange}>
                <option>UTC +5:00 Delhi</option>
                <option>UTC +1:00 London</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Set Duration</label>
            <select name="duration" value={formData.duration} onChange={handleChange}>
              <option value="">--Select--</option>
              <option>30 mins</option>
              <option>1 hour</option>
              <option>2 hours</option>
            </select>
          </div>

          <div className="button-row">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div></DashBoardTemplate>
    </>
  );
};

export default CreateEventForm;
