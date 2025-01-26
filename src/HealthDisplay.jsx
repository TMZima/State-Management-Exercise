import React from "react";

const HealthDisplay = ({ playerHealth = 100, enemyHealth = 100 }) => {
  return (
    <div>
      <h2>Player Health: {playerHealth}</h2>
      <h2>Enemy Health: {enemyHealth}</h2>
    </div>
  );
};

export default HealthDisplay;
