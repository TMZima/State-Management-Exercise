import React, { useState, useEffect } from "react";
import HealthDisplay from "./HealthDisplay";
import GameStatus from "./GameStatus";
import ActionButton from "./ActionButton";
import BattleLog from "./BattleLog";
import "./App.css";

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);
  const [status, setStatus] = useState("");

  const randomDmg = () => Math.floor(Math.random() * 50) + 1;

  const updateHealth = () => {
    setPlayerHealth((prevPlayerHealth) =>
      Math.max(prevPlayerHealth - randomDmg(), 0)
    );
    setEnemyHealth((prevEnemyHealth) =>
      Math.max(prevEnemyHealth - randomDmg(), 0)
    );
  };

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

  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <HealthDisplay playerHealth={playerHealth} enemyHealth={enemyHealth} />
      <GameStatus status={status} />
      <ActionButton updateHealth={updateHealth} />
      <BattleLog />
    </div>
  );
}

export default App;
