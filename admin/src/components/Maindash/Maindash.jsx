import React from "react";
import Cards from "../Cards/Cards";
import RecentOrdersTable from "../RecentOrdersTable/RecentOrdersTable"
import "./Maindash.css";

const Maindash = () => {
  return (
    <div className="MainDash">
      <h1>Monthly Overview</h1>
      <Cards />
      <h2>Recent Orders</h2>
      <RecentOrdersTable />
    </div>
  );
};

export default Maindash;
