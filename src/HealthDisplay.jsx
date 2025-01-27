import React from "react";
import "./HealthDisplay.css";

const HealthDisplay = ({ playerHealth, enemyHealth }) => {
  const getPlayerEmoji = () => {
    if (playerHealth === 0) {
      return "💀";
    } else if (playerHealth <= 75) {
      return "❤️‍🩹";
    } else {
      return "❤️";
    }
  };

  const getEnemyEmoji = () => {
    if (enemyHealth === 0) {
      return "💀";
    } else if (enemyHealth <= 75) {
      return "❤️‍🩹";
    } else {
      return "❤️";
    }
  };

  return (
    <div className="HealthDisplay">
      <h2 className="HealthDisplay-player">
        Player Health: {playerHealth} {getPlayerEmoji()}
      </h2>
      <h2 className="HealthDisplay-enemy">
        Enemy Health: {enemyHealth} {getEnemyEmoji()}
      </h2>
    </div>
  );
};

export default HealthDisplay;
