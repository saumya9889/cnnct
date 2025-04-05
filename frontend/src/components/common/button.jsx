import React from "react";
  const Button = ({ isDisabled, onClick }) => {

  return (
    <button className="continue-button" disabled={isDisabled} onClick={onClick}>
      Continue
    </button>
  );
};

export default Button;
