import React, { useState } from 'react';

const CreateEvent = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    topic: '',
    password: '',
    hostName: 'Sarthak Pal',
    description: '',
    date: '',
    time: '',
    duration: '1 hour',
    timezone: 'UTC +5:00 Delhi'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', formData);
    // Yaha API call ya backend save logic laga sakte ho
    setShowForm(false);
  };

  return (
    <div className="event-page">
      <aside className="sidebar">
        <h2>CNCT</h2>
        <ul>
          <li>Events</li>
          <li>Booking</li>
          <li>Availability</li>
          <li>Settings</li>
        </ul>
        <button className="create-btn" onClick={() => setShowForm(true)}>+ Create</button>
      </aside>

      <main className="main-content">
        {showForm && (
          <div className="form-box">
            <h2>Add Event</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Event Topic *
                <input
                  type="text"
                  placeholder="Set a conference topic before it starts"
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  required
                />
              </label>

              <label>
                Password
                <input
                  type="text"
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </label>

              <label>
                Host Name *
                <input
                  type="text"
                  value={formData.hostName}
                  onChange={(e) => setFormData({ ...formData, hostName: e.target.value })}
                  required
                />
              </label>

              <label>
                Description
                <textarea
                  placeholder="Add description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </label>

              <label>
                Date and Time *
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  required
                />
                <input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  required
                />
              </label>

              <label>
                Timezone
                <input type="text" value={formData.timezone} readOnly />
              </label>

              <label>
                Set Duration
                <select
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                >
                  <option value="15 minutes">15 minutes</option>
                  <option value="30 minutes">30 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="2 hours">2 hours</option>
                </select>
              </label>

              <div className="form-buttons">
                <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default CreateEvent;
