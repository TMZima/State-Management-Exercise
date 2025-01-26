import React from "react";

const GameStatus = ({ status }) => {
  let message;
  if (status === "win") {
    message = `Congratulations! 😎💪 You've successfully defended your spacecraft.`;
  } else if (status === "lose") {
    message = `Mission Failed. 😵 Your spacecraft has been defeated.`;
  } else if (status === "draw") {
    message = `It's a draw! 🤝 Both spacecrafts have been neutralized.`;
  } else {
    message = `Engage the enemy! ☄️`;
  }
  return <h2>{message}</h2>;
};

export default GameStatus;
