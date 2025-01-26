import React from "react";

const ActionButton = ({ status }) => {
  let message;
  if (status === "win") {
    message = "Restart?";
  } else if (status === "lose") {
    message = "Restart?";
  } else if (status === "draw") {
    message = "Restart?";
  } else {
    message = "Fire!";
  }

  return <button>{message}</button>;
};

export default ActionButton;
