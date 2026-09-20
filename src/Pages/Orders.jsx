import React from 'react'
import "../Pages/CSS/Orders.css"
import BottomBar from '../Components/BottomBar'
import { FaUser } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";


const Orders = () => {
  return (
   <>

 <div className="orders-header-outer">
  <div className="orders-outer">
    <div className="icons-back">
      <IoMdArrowRoundBack />

    </div>
    
    <h1>Customer Orders</h1>
  </div>
  <div className="orders-category-outer">
<button>All Orders</button>
<button>Pending</button>
<button>Processing</button>
<button>Delivered</button>
  </div>


  <div className="orders-outer-cards">
    <div className="orders-outer-card">
      <div className="orders-image">
        <span><FaUser /></span>
      </div>
      <div className="orders-content">
        <h3>#ORD001</h3>
       <div className="orders-content-h">
         <p>5 items | 320</p> 
         {/* <p className='orders-icon'><IoChevronBack /></p> */}
       </div>
        <p>Placed 10 Apr 2025 11:30AM </p>
      </div>
      <div className="pending">
        <p>Pending</p>
      </div>
    </div>
    <div className="orders-outer-card">
      <div className="orders-image">
        <span><FaUser /></span>
      </div>
      <div className="orders-content">
        <h3>#ORD001</h3>
       <div className="orders-content-h">
         <p>5 items | 320</p> 
         {/* <p className='orders-icon'><IoChevronBack /></p> */}
       </div>
        <p>Placed 10 Apr 2025 11:30AM </p>
      </div>
      <div className="process">
        <p>Process</p>
      </div>
    </div>
    <div className="orders-outer-card">
      <div className="orders-image">
        <span><FaUser /></span>
      </div>
      <div className="orders-content">
        <h3>#ORD001</h3>
       <div className="orders-content-h">
         <p>5 items | 320</p> 
         {/* <p className='orders-icon'><IoChevronBack /></p> */}
       </div>
        <p>Placed 10 Apr 2025 11:30AM </p>
      </div>
      <div className="Cancel">
        <p>Cancel</p>
      </div>
    </div>
  </div>
 </div>
   <BottomBar/>
   
   
   
   </>
  )
}

export default Orders