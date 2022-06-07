import React from 'react'
import './Sidebar.css'
import Logo from "../../imgs/logo.JPG";


const Sidebar = () => {
  return (
    <div className="Sidebar">
        <img src={Logo} alt="logo" />
        <span>
          Dubu Natural
        </span>
    </div>
  )
}

export default Sidebar