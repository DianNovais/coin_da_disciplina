import React from "react";

import "./Cards.css";

const Cards = ({ title, money, action }) => {
  const infoButton = action();
  return (
    <div className="card">
      <p>{title}</p>
      <div>
        <span>{money} CD</span>
        <button onClick={() => action(money)} className="btn_main">
          {infoButton}
        </button>
      </div>
    </div>
  );
};

export default Cards;
