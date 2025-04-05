import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post("/register", async (req, res) => {
    console.log("👉 req.body received:", req.body);
    
    const { firstName, lastName, email, password } = req.body;
  
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      const newUser = new User({ 
        firstName, 
        lastName, 
        email, 
        password: hashedPassword,
        username: email.split('@')[0]  // Explicitly set username
      });

      await newUser.save();
  
      res.status(201).json({ 
        message: "User created successfully", 
        user: {
          _id: newUser._id,  // Include the user's ID
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          username: newUser.username
        }
      });
    } catch (error) {
      console.error("❌ Registration Error:", error.message);
      
      // Handle duplicate key errors specifically
      if (error.code === 11000) {
        const field = Object.keys(error.keyPattern)[0];
        return res.status(400).json({ 
          message: `${field} already exists`,
          error: `Duplicate ${field}`
        });
      }
      
      res.status(500).json({ 
        message: "Something went wrong during registration", 
        error: error.message 
      });
    }
});

// Save user preferences
router.post("/preferences", async (req, res) => {
  const { userId, username, category } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update username if provided and different
    if (username && username !== user.username) {
      // Check if username is already taken
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ message: "Username already taken" });
      }
      user.username = username;
    }

    // Add preferences
    user.category = category;
    await user.save();

    res.status(200).json({
      message: "Preferences saved successfully",
      preferences: {
        username: user.username,
        category: user.category
      }
    });
  } catch (error) {
    console.error("Error saving preferences:", error);
    res.status(500).json({ 
      message: "Failed to save preferences",
      error: error.message 
    });
  }
});

export default router;
