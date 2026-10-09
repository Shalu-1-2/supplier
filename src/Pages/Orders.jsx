import React, { useState } from 'react'
import "../Pages/CSS/Orders.css"
import BottomBar from '../Components/BottomBar'
import { FaUser } from "react-icons/fa";
import { IoChevronBack } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import {  NavLink } from 'react-router-dom';

const Orders = () => {
  const [activeFilter, setActiveFilter] = useState("Pending");

  const orders = [
    { id: "#ORD001", items: "5 items |320", date: "Placed 10 Apr 2025 11.30AM", status: "Pending" },
    { id: "#ORD002", items: "3 items |150", date: "Placed 12 Apr 2025 02.30PM", status: "Delivered" },
    { id: "#ORD003", items: "2 items |100", date: "Placed 15 Apr 2025 09.00AM", status: "Cancelled" },
    { id: "#ORD004", items: "1 items |520", date: "Placed 18 Apr 2025 11.30AM", status: "Pending" },

  ];

  const filteredOrders =
    activeFilter === "All Orders"
      ? orders
      : orders.filter((order) => order.status === activeFilter);
  return (
    <>

      <div className="orders-header-outer">
        <div className="orders-outer">
          <div className="icons-header">
            <div className="icons-back">
              <IoMdArrowRoundBack />
            </div>
            <h1>Customer Orders</h1>
          </div>
        </div>
        <div className="orders-category-outer">
          <button
            className={activeFilter === "Pending" ? "active-filter" : ""}
            onClick={() => setActiveFilter("Pending")}>Pending </button>

          <button
            className={activeFilter === "Delivered" ? "active-filter" : ""}
            onClick={() => setActiveFilter("Delivered")}>Delivered</button>

          <button
            className={activeFilter === "Cancelled" ? "active-filter" : ""}
            onClick={() => setActiveFilter("Cancelled")}>Cancelled</button>
     
        <button
          className={activeFilter === "All Orders" ? "active-filter" : ""}
          onClick={() => setActiveFilter("All Orders")}>All Orders</button>
      </div>
        
      <div className="orders-outer-cards">
        {filteredOrders.length > 0 ? (
          filteredOrders.map((order) => (

            <div className="orders-outer-card"
              key={order.id}>

              <div className="orders-image">
                <span><FaUser /></span>
              </div>
              <div className="orders-content">
                <h3>{order.id}</h3>
      
                <div className="orders-content-h">
                  <p>{order.items}</p>
                </div>
                <p>{order.date} </p>
              </div>

              <div className={
                order.status === "Pending" ? "pending" :order.status ==="Delivered" ? "delivered" : "Cancel"}
              >
                <p>{order.status}</p>
                <NavLink to='/order-detail' className='order-view'>View</NavLink>
              </div>
              </div>

         ))

   ) : (
            <div className="no-orders">
              <p>
                No {activeFilter} orders found.
              </p>

            </div>
        )}
    </div>
     </div>


      <BottomBar />



    </>
  )
}

export default Orders