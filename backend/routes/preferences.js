import express from "express";
    import User from "../models/user.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, username, category } = req.body;
  console.log("📩 Preferences Received:", req.body);

  if (!userId || !username || !category) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, category },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("❌ Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
