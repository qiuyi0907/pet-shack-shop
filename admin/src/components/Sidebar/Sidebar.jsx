import React from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.JPG";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>Dubu Natural</span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <NavLink
              to={item.route}
              className={({ isActive }) =>
                isActive ? "menuItem active" : "menuItem"
              }
              key={index}
            >
              <item.icon />
              <span>{item.heading}</span>
            </NavLink>
          );
        })}
        <div className="menuItem">
          <UilSignOutAlt />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
