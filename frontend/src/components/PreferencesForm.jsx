import React, { useState, useEffect } from "react";
import CategoryButton from "./common/categoryButton";
import Button from "./common/button";
import { useNavigate } from "react-router-dom";

const categories = [
  { name: "Sales", icon: "📊" },
  { name: "Finance", icon: "💰" },
  { name: "Consulting", icon: "📋" },
  { name: "Tech", icon: "💻" },
  { name: "Education", icon: "📚" },
  { name: "Government & Politics", icon: "🏛️" },
  { name: "Recruiting", icon: "🤝" },
  { name: "Marketing", icon: "📢" },
];

const PreferencesForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  // Get user data when component mounts
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      alert("Please sign up or log in first");
      navigate("/");
      return;
    }
  }, [navigate]);

  const handleContinue = async () => {
    const userData = localStorage.getItem("userData");
    if (!userData) {
      alert("Please sign up or log in first");
      navigate("/");
      return;
    }

    const user = JSON.parse(userData);

    try {
      const res = await fetch("http://localhost:5000/api/users/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user._id,
          username,
          category: selectedCategory,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        // Update stored user data with new preferences
        const updatedUser = { ...user, username, category: selectedCategory };
        localStorage.setItem("userData", JSON.stringify(updatedUser));
        alert("Preferences saved successfully!");
        navigate("/dashboard");
      } else {
        alert(result.message || "Error saving preferences");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to save preferences. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>Your Preferences</h2>
      <input
        type="text"
        placeholder="Tell us your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="category-text">Select one category that best describes your CNNCT:</p>
      <div className="categories">
        {categories.map((category) => (
          <CategoryButton
            key={category.name}
            category={category}
            isSelected={selectedCategory === category.name}
            onClick={() => setSelectedCategory(category.name)}
          />
        ))}
      </div>
      <Button
        isDisabled={!selectedCategory || !username}
        onClick={handleContinue}
      />
    </div>
  );
};

export default PreferencesForm;
