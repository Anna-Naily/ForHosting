import React from "react";
import "./WaitingPage.css";
export const WaitingPage = () => {
  return (
    <div className="chat-window-block">
      <div className="chat-window chat-window-waiting">
        <p className="chat-window-waiting_text">
          Выберите собеседника для начала диалога
        </p>
      </div>
    </div>
  );
};
