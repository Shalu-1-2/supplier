import React from 'react'
import "../Components/CSS/BottomBar.css"
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdAddAlert } from "react-icons/md";
import { IoHome } from "react-icons/io5";
const BottomBar = () => {
  return (
    <>
    <div className="bottom-bar-section">
        <div className="bottom-bar-menu">
          <ul>
            <NavLink to='/home' className={({ isActive }) => `navLink ${isActive ? "active" :""} `}>  <span><IoHome /> </span>Home</NavLink>
             {/* <NavLink to='/users' className={({ isActive }) => `navLink ${isActive ? "active": "" }`}><span> <FaUsers /></span>Users</NavLink> */}
            <NavLink to='/products' className={({ isActive }) => `navLink ${isActive ? "active" :"" }`}><span><MdProductionQuantityLimits /> </span>Products</NavLink>
            <NavLink to='/orders' className={({isActive})=> `navLink ${isActive? "active" : ""}`}><span><IoCartOutline /></span>Orders</NavLink>
        <NavLink to='/profile' className={({ isActive }) => `navLink ${isActive? "active" : ""} `}><span><FaCircleUser /> </span>Profile</NavLink>
          </ul>
        </div>

      </div>
    </>
  )
}

export default BottomBar