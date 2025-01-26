import React, { useState, useEffect } from "react";
import HealthDisplay from "./HealthDisplay";
import GameStatus from "./GameStatus";
import ActionButton from "./ActionButton";
import "./App.css";

function App() {
  // Initialize state for player health, enemy health, and game status
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [status, setStatus] = useState("");

  // Function to generate random damage value
  const randomDmg = () => Math.floor(Math.random() * 50) + 1;

  // Function to update health values
  const updateHealth = () => {
    setPlayerHealth((prevPlayerHealth) =>
      Math.max(prevPlayerHealth - randomDmg(), 0)
    );
    setEnemyHealth((prevEnemyHealth) =>
      Math.max(prevEnemyHealth - randomDmg(), 0)
    );
  };

  // useEffect hook to update game status based on health values
  useEffect(() => {
    const updateStatus = () => {
      if (playerHealth === 0 && enemyHealth === 0) {
        setStatus("draw");
      } else if (playerHealth === 0) {
        setStatus("lose");
      } else if (enemyHealth === 0) {
        setStatus("win");
      }
    };

    updateStatus();
  }, [playerHealth, enemyHealth]);

  // Function to reset the game to its initial state
  const resetGame = () => {
    setPlayerHealth(100);
    setEnemyHealth(100);
    setStatus("");
  };

  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <HealthDisplay playerHealth={playerHealth} enemyHealth={enemyHealth} />
      <GameStatus status={status} />
      <ActionButton
        updateHealth={updateHealth}
        resetGame={resetGame}
        status={status}
      />
    </div>
  );
}

export default App;
