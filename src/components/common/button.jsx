import React from "react";

const Button = ({ isDisabled }) => {
  return (
    <button className="continue-button" disabled={isDisabled}>
      Continue
    </button>
  );
};

export default Button;
