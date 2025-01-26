import React, { useState } from "react";
import HealthDisplay from "./HealthDisplay";
import GameStatus from "./GameStatus";
import ActionButton from "./ActionButton";
import BattleLog from "./BattleLog";
import "./App.css";

function App() {
  const [playerHealth, setPlayerHealth] = useState(100);
  const [enemyHealth, setEnemyHealth] = useState(100);

  const updateHealth = () => {
    const randomDmg = Math.floor(Math.random() * 50) + 1;
    const randomPlayer = Math.random() < 0.5 ? 1 : 2;

    if (randomPlayer === 1) {
      setPlayerHealth((prevPlayerHealth) =>
        Math.max(prevPlayerHealth - randomDmg, 0)
      );
    } else {
      setEnemyHealth((prevEnemyHealth) =>
        Math.max(prevEnemyHealth - randomDmg, 0)
      );
    }
  };

  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <HealthDisplay playerHealth={playerHealth} enemyHealth={enemyHealth} />
      <GameStatus />
      <ActionButton updateHealth={updateHealth} />
      <BattleLog />
    </div>
  );
}

export default App;
