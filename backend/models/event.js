import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  password: { type: String },
  host: { type: String, required: true },
  description: { type: String },
  date: { type: Date, required: true },
  time: { type: String },
  meridian: { type: String, default: "AM" },
  timezone: { type: String, default: "UTC +5:00 Delhi" },
  duration: { type: String },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;
