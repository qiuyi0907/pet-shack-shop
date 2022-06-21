import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import "./Card.css";
import Chart from "react-apexcharts";
import { UilArrowUp, UilArrowDown, UilTimes } from "@iconscout/react-unicons";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// CompactCard
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  const stylered = { color: "red" };
  const stylegreen = { color: "green" };
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId="expandableCard"
    >
      <div className="inform">
        <span>{param.title}</span>
        <div>
          <span>${param.value}</span>
          <div>
            {Math.abs(param.difference)}%{" "}
            {param.difference >= 0 ? (
              <UilArrowUp style={stylegreen} />
            ) : (
              <UilArrowDown style={stylered} />
            )}{" "}
          </div>
        </div>
        <span>Compare to last month</span>
      </div>

      <div className="detail">
        <Png />
        <div> </div>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2022-06-20",
          "2022-06-21T",
          "2022-06-22T",
          "2022-06-23T",
          "2022-06-24T",
          "2022-06-25T",
          "2022-06-26T",
        ],
      },
    },
  };

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes id="cross" onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last month</span>
    </motion.div>
  );
}
export default Card;
