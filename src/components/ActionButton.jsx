import React from "react";
import "./ActionButton.css";

const ActionButton = ({ status, updateHealth, resetGame }) => {
  let message = "";

  // Set button message based on game status
  if (status === "win" || status === "lose" || status === "draw") {
    message = "Restart?";
  } else {
    message = "Fire!";
  }

  return (
    <div className="ActionButton-container">
      <button
        className="ActionButton-btn"
        // Set onClick handler based on game status
        onClick={
          status === "win" || status === "lose" || status === "draw"
            ? resetGame
            : updateHealth
        }
      >
        {message}
      </button>
    </div>
  );
};

export default ActionButton;
