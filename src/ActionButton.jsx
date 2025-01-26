import React from "react";

const ActionButton = ({ status, updateHealth, resetGame }) => {
  let message = "";

  if (status === "win" || status === "lose" || status === "draw") {
    message = "Restart?";
  } else {
    message = "Fire!";
  }

  return (
    <button
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
