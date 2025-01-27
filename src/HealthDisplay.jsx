import React from "react";
import "./HealthDisplay.css";

const HealthDisplay = ({ playerHealth, enemyHealth }) => {
  return (
    <div className="HealthDisplay">
      <h2 className="HealthDisplay-player">Player Health: {playerHealth}</h2>
      <h2 className="HealthDisplay-enemy">Enemy Health: {enemyHealth}</h2>
    </div>
  );
};

export default HealthDisplay;
