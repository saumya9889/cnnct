import React from "react";

const CategoryButton = ({ category, isSelected, onClick }) => {
  return (
    <button className={`category-button ${isSelected ? "selected" : ""}`} onClick={onClick}>
      {category.icon} {category.name}
    </button>
  );
};

export default CategoryButton;
