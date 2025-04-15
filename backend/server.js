import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import preferencesRoutes from "./routes/preferences.js";
import eventRoutes from "./routes/eventRoutes.js"; 
// ✅ Load environment variables only once
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/preferences", preferencesRoutes);
app.use("/api/events", eventRoutes); // Add this line to handle event-related routes


// ✅ Server listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));




