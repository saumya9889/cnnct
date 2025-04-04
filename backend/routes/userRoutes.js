// import express from "express";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";    

// const router = express.Router();

// // **Signup Route**
// router.post("/signup", async (req, res) => {
//   const { firstName, lastName, email, password, confirmPassword } = req.body;

//   if (password !== confirmPassword) {
//     return res.status(400).json({ message: "Passwords do not match" });
//   }

//   const existingUser = await User.findOne({ email });
//   if (existingUser) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const newUser = new User({
//     firstName,
//     lastName,
//     email,
//     password: hashedPassword,
//     username: email.split("@")[0],
//   });

//   await newUser.save();
//   res.status(201).json({ message: "User registered successfully" });
// });

// // **Login Route**
// router.post("/login", async (req, res) => {
//   const { username, password } = req.body;

//   const user = await User.findOne({ username });
//   if (!user) {
//     return res.status(400).json({ message: "User not found" });
//   }

//   const isPasswordValid = await bcrypt.compare(password, user.password);
//   if (!isPasswordValid) {
//     return res.status(400).json({ message: "Invalid credentials" });
//   }

//   const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//     expiresIn: "1h",
//   });

//   res.status(200).json({ message: "Login successful", token });
// });

// export default router;


import express from "express";
import User from "../models/User.js";

const router = express.Router();

// POST /api/users/register
// router.post("/register", async (req, res) => {
//     console.log("Request Body:", req.body); // ✅ Check incoming request data

//   const { firstName, lastName, email, password } = req.body;

//   try {
//     // Check if user already exists
//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Create new user
//     const newUser = new User({ firstName, lastName, email, password });
//     await newUser.save();

//     res.status(201).json({ message: "User created successfully", user: newUser });
//   } catch (error) {
//     res.status(500).json({ message: "Something went wrong", error });
//   }
// });
router.post("/register", async (req, res) => {
    console.log("👉 req.body received:", req.body);  // Add this
    
    const { firstName, lastName, email, password } = req.body;
  
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
  
    try {
      const userExists = await User.findOne({ email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
  
      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("❌ Registration Error:", error.message); // <-- Yeh zarur lagao
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  });
  
  

export default router;
