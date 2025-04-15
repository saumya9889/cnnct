import express from "express";
import Event from "../models/Event.js";

const router = express.Router();

// Route to save an event
router.post("/", async (req, res) => {
  try {
    const { topic, password, host, description, date, time, meridian, timezone, duration } = req.body;

    // Create a new event instance
    const newEvent = new Event({
      topic,
      password,
      host,
      description,
      date: new Date(date), // Convert the string to a Date object
      time,
      meridian,
      timezone,
      duration,
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error("Error saving event:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
