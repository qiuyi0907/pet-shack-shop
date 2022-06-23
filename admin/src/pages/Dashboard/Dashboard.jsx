import React from "react";
import Maindash from "../../components/Maindash/Maindash";
import RightSide from "../../components/RightSide/RightSide";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Sidebar />
      <Maindash />
      <RightSide />
    </div>
  );
};

export default Dashboard;
