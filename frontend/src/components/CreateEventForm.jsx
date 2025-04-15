
// import React, { useState } from "react";

// const CreateEventForm = ({ onClose }) => {
//   const [hostOptions, setHostOptions] = useState(["Sarthak Pal"]);
//   const [formData, setFormData] = useState({
//     topic: "",
//     password: "",
//     host: "Sam Mishra ",
//     description: "",
//     date: "",
//     time: "",
//     meridian: "AM",
//     timezone: "UTC +5:00 Delhi",
//     duration: "",
//   });

//   const handleHost = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === "host" && value && !hostOptions.includes(value)) {
//       setHostOptions((prev) => [...prev, value]);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("https://your-backend-api.com/events", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log("Event saved:", data);
//     } catch (error) {
//       console.error("Error saving event:", error);
//     }
//     onClose();
//   };

//   return (
//     <div className="container">
//       <div className="head-title">
//         <h2 className="heading">Create Event</h2>
//         <p className="subtitle">Create events to share for people to book on your calendar</p>
//       </div>

//       <div className="event-form-container">
//         <h2>Add Event</h2>
//         <form onSubmit={handleSubmit} className="event-form">
//           <div className="form-group">
//             <label>Event Topic <span>*</span></label>
//             <input
//               type="text"
//               name="topic"
//               value={formData.topic}
//               placeholder="Set a conference topic"
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="text"
//               name="password"
//               value={formData.password}
//               placeholder="Password"
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Host name<span>*</span></label>
//             <select name="host" value={formData.host} onChange={handleHost}>
//               {hostOptions.map((host, index) => (
//                 <option key={index} value={host}>{host}</option>
//               ))}
//               <option value="">Add new host</option>
//             </select>
//             {formData.host === "" && (
//               <input
//                 type="text"
//                 name="host"
//                 placeholder="Enter new host name"
//                 value={formData.host}
//                 onChange={handleHost}
//               />
//             )}
//           </div>

//           <div className="form-group">
//             <label>Description</label>
//             <textarea
//               name="description"
//               placeholder="Description"
//               value={formData.description}
//               onChange={handleChange}
//             />
//           </div>

//           <div className="form-group">
//             <label>Date and Time<span>*</span></label>
//             <div className="datetime-row">
//               <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
//               <select name="time" value={formData.time} onChange={handleChange}>
//                 <option value="">Select Time</option>
//                 <option>02:00</option>
//                 <option>02:30</option>
//                 <option>03:00</option>
//                 <option>04:00</option>
//               </select>
//               <select name="meridian" value={formData.meridian} onChange={handleChange}>
//                 <option>AM</option>
//                 <option>PM</option>
//               </select>
//               <select name="timezone" value={formData.timezone} onChange={handleChange}>
//                 <option>UTC +5:00 Delhi</option>
//                 <option>UTC +1:00 London</option>
//                 <option>UTC -5:00 New York</option>
//               </select>
//             </div>
//           </div>

//           <div className="form-group">
//             <label>Set Duration</label>
//             <select name="duration" value={formData.duration} onChange={handleChange}>
//               <option value="">--Select--</option>
//               <option>30 mins</option>
//               <option>1 hour</option>
//               <option>2 hours</option>
//               <option>Custom</option>
//             </select>
//           </div>

//           <div className="button-row">
//             <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
//             <button type="submit" className="save-btn">Save</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEventForm;

import React, { useState } from "react";

const CreateEventForm = ({ onClose }) => {
  const [hostOptions, setHostOptions] = useState(["Sarthak Pal"]);
  const [formData, setFormData] = useState({
    topic: "",
    password: "",
    host: "Sarthak Pal",
    description: "",
    date: "",
    time: "",
    meridian: "AM",
    timezone: "UTC +5:00 Delhi",
    duration: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send the event data to the backend
      const res = await fetch("http://localhost:5000/api/events", {  // Correct API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),  // Sending form data as JSON
      });
    
      // Check if the response is successful
      if (res.ok) {
        const data = await res.json();  // Parse the JSON response
        console.log("✅ Event saved:", data);  // Log the saved event data
        onClose(); // Close modal or form after successful submission
      } else {
        // If the response is not OK, log an error
        console.error("❌ Failed to save event");
      }
    } catch (error) {
      // Catch and log any error that occurs during the fetch
      console.error("❌ Error while saving:", error);
    }
  };
  
  const handleHost = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "host" && value && !hostOptions.includes(value)) {
      setHostOptions((prev) => [...prev, value]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await fetch("https://your-backend-api.com/events", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(formData),
  //     });
  //     const data = await res.json();
  //     console.log("Event saved:", data);
  //   } catch (error) {
  //     console.error("Error saving event:", error);
  //   }
  //   onClose();
  // };

  return (
    <div className="container">
      <div className="head-title">
        <h2 className="heading">Create Event</h2>
        <p className="subtitle">Create events to share for people to book on your calendar</p>
      </div>

      <div className="event-form-container">
        <h2>Add Event</h2>
        <form onSubmit={handleSubmit} className="event-form">
          <div className="form-group">
            <label>Event Topic <span>*</span></label>
            <input
              type="text"
              name="topic"
              value={formData.topic}
              placeholder="Set a conference topic"
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
            />
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
              <input
                type="text"
                name="host"
                placeholder="Enter new host name"
                value={formData.host}
                onChange={handleHost}
              />
            )}
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date and Time<span>*</span></label>
            <div className="datetime-row">
              <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} />
              <select name="time" value={formData.time} onChange={handleChange}>
                <option value="">--Select Time--</option>
                <option>02:00</option>
                <option>02:30</option>
                <option>03:00</option>
                <option>04:00</option>
              </select>
              <select name="meridian" value={formData.meridian} onChange={handleChange}>
                <option>AM</option>
                <option>PM</option>
              </select>
              <select name="timezone" value={formData.timezone} onChange={handleChange}>
                <option>UTC +5:00 Delhi</option>
                <option>UTC +1:00 London</option>
                <option>UTC -5:00 New York</option>
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
              <option>Custom</option>
            </select>
          </div>

          <div className="button-row">
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
            <button type="submit" className="save-btn">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEventForm;
