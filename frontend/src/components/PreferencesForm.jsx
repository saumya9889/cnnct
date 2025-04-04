import React, { useState } from "react";
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
  { name: "Marketing", icon: "📢" }
];
const PreferencesForm = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
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
      <Button isDisabled={!selectedCategory || !username} navigate={navigate("/dashboard")} />
    </div>
  );
};

export default PreferencesForm;
