import React, { useState } from "react";
import HealthDisplay from "./HealthDisplay";
import GameStatus from "./GameStatus";
import ActionButton from "./ActionButton";
import BattleLog from "./BattleLog";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Space Battle Simulator</h1>
      <HealthDisplay />
      <GameStatus />
      <ActionButton />
      <BattleLog />
    </div>
  );
}

export default App;
