import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  password: { type: String },
  host: { type: String },
  description: { type: String },
  date: { type: String },
  time: { type: String },
  meridian: { type: String },
  timezone: { type: String },
  duration: { type: String },
  active: { type: Boolean, default: true },
}, { timestamps: true });

const Event = mongoose.model("Event", eventSchema);
export default Event;

