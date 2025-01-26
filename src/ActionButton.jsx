import React from "react";

const ActionButton = ({ status, updateHealth, resetGame }) => {
  let message = "";

  // Set button message based on game status
  if (status === "win" || status === "lose" || status === "draw") {
    message = "Restart?";
  } else {
    message = "Fire!";
  }

  return (
    <button
      // Set onClick handler based on game status
      onClick={
        status === "win" || status === "lose" || status === "draw"
          ? resetGame
          : updateHealth
      }
    >
      {message}
    </button>
  );
};

export default ActionButton;
