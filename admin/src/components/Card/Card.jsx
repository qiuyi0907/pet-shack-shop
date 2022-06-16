import React from "react";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
import "./Card.css";
import { UilArrowUp, UilArrowDown } from '@iconscout/react-unicons'


const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? "Expanded" : <CompactCard param={props} />}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ param }) {
  const Png = param.png;
  const stylered = { color: "red" };
  const stylegreen = { color: "green" };
  return (
    <div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
    >
      <div className="inform">
        <span>{param.title}</span>
        <div>
          <span>${param.value}</span>
          <div>
            {Math.abs(param.difference)}%{" "}
            {param.difference >= 0 ? <UilArrowUp style={stylegreen}/> : <UilArrowDown style={stylered}/>}{" "}
          </div>
        </div>
        <span>Compare to last month</span>
      </div>

      <div className="detail">
        <Png />
        <div> </div>
      </div>
    </div>
  );
}
export default Card;
