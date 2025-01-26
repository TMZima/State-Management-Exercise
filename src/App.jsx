import { useState } from "react";
import HealthDisplay from "./HealthDisplay";
import GameStatus from "./GameStatus";
import ActionButton from "./ActionButton";
import BattleLog from "./BattleLog";
import "./App.css";

function App() {
  return (
    <div>
      <HealthDisplay />
    </div>
  );
}

export default App;
