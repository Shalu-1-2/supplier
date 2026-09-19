import React from 'react'
import BottomBar from '../Components/BottomBar'
import "../Pages/CSS/Home.css"
import { MdAddAlert } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { FaCartFlatbed } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { VscVmPending } from "react-icons/vsc";
import { MdOutlineFreeCancellation } from "react-icons/md";
const Home = () => {
  return (
    <>
      <div className="home-header-top">
        <h3>Dashboard</h3>
        
          <NavLink className='header-icon'><MdAddAlert /> </NavLink>
     
      </div>

      <div className="welcome-home-outer">
        <img src="./home.png" alt="" />
        <div className="welcome-home-content">
            <h3>Welcome, Water World</h3>
            <p>Your Business is growing</p>
        </div>
      </div>
    
    <div className="home-outer-cards">
      <div className="home-card">
         <span className='order-icon'><FaCartFlatbed/></span>
          <h3>Total Orders</h3>
          <p>5</p>    
      </div>
       <div className="home-card">
        <span  className='deliver-icon'><GrDeliver/></span>
          <h3>Deliverd</h3>
          <p>15</p>    
      </div>
       <div className="home-card">
        <span  className='pending-icon'><VscVmPending/></span>
          <h3>Pending</h3>
          <p>50</p>    
      </div>
       <div className="home-card">
        <span  className='cancel-icon'>< MdOutlineFreeCancellation/></span>
          <h3>Cancelled</h3>
          <p>9</p>    
      </div>
    </div>
     <BottomBar/>
    </>
   
  )
}

export default Home