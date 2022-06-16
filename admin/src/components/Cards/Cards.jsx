import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
import { CardsData } from "../../Data/Data";

const Cards = () => {
  return (
    <div className="Cards">
      {CardsData.map((card, key) => {
        return (
          <div className="parentContainer">
            <Card
              key={key}
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              difference={card.difference}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
