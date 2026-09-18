import React from 'react'
import"../Pages/CSS/Dashboard.css"
import { NavLink } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdAddAlert } from "react-icons/md";


const Dashboard = () => {

  return (

    <>
<div className="dashboard-header-outer">
  <div className="dashboard-header">
    <h1>Dashboard</h1>
    <div className="header-icon">
      <span><MdAddAlert /> </span>
    </div>
  </div>
</div>
<div className="dashboards-outer-cards">
  <div className="dashboard-card">
      <h3>Total Orders</h3>
      <p>5</p>    
  </div>
   <div className="dashboard-card">
      <h3>DEliverd</h3>
      <p>15</p>    
  </div>
   <div className="dashboard-card">
      <h3>Pending</h3>
      <p>50</p>    
  </div>
   <div className="dashboard-card">
      <h3>Cancelled</h3>
      <p>9</p>    
  </div>
</div>
      <div className="dashboard-bottom-bar">
        <div className="bottom-menu">
          <ul>
            <li><NavLink to='/dashboard' className={({ isActive }) => `navLink ${isActive ? "active" :""} `}>  <p><MdOutlineDashboard /> </p>Dashboard</NavLink></li>
            <li> <NavLink to='/users' className={({ isActive }) => `navLink ${isActive ? "active": "" }`}><p> <FaUsers /></p>Users</NavLink></li>
            <li> <NavLink to='/products' className={({ isActive }) => `navLink ${isActive ? "active" :"" }`}><p><MdProductionQuantityLimits /> </p>Products</NavLink></li>
            <li><NavLink to='/orders' className={({isActive})=> `navLink ${isActive? "active" : ""}`}><p><IoCartOutline /></p>Orders</NavLink></li>
            <li> <NavLink to='/profile' className={({ isActive }) => `navLink ${isActive? "active" : ""} `}><p><FaCircleUser /> </p>Profile</NavLink></li>
          </ul>
        </div>

      </div>

    </>
  )
}

export default Dashboard