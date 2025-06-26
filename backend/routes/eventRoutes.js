// import express from "express";
// import Event from "../models/Event.js";

// const router = express.Router();

// // Route to save an event
// router.post("/", async (req, res) => {
//   try {
//     const { topic, password, host, description, date, time, meridian, timezone, duration } = req.body;

//     // Create a new event instance
//     const newEvent = new Event({
//       topic,
//       password,
//       host,
//       description,
//       date: new Date(date), // Convert the string to a Date object
//       time,
//       meridian,
//       timezone,
//       duration,
//     });

//     // Save the event to the database
//     const savedEvent = await newEvent.save();

//     res.status(201).json(savedEvent);
//   } catch (error) {
//     console.error("Error saving event:", error);
//     res.status(500).json({ message: "Server error" });
//   }

// });

// router.post("/events", async (req, res) => {
//   try {
//     const newEvent = new Event(req.body);
//     await newEvent.save();
//     res.status(201).json(newEvent); // 👈 important for frontend update
//   } catch (err) {
//     res.status(500).json({ message: "Error saving event" });
//   }
// });

// export default router;


import express from "express";
import Event from "../models/event.js";

const router = express.Router();

// 🔸 Create event
router.post("/", async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    const saved = await newEvent.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error: error.message });
  }
});

// 🔹 Get all events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
});

// ✏️ Update event (edit/toggle)
router.put("/:id", async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: "Failed to update event", error: error.message });
  }
});

// ❌ Delete event
router.delete("/:id", async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Event deleted" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event", error: error.message });
  }
});

export default router;
