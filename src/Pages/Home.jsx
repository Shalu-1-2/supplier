import React from 'react'
import BottomBar from '../Components/BottomBar'
import "../Pages/CSS/Home.css"
import { NavLink } from 'react-router-dom'

import { FaCartFlatbed, FaPlus } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { VscVmPending } from "react-icons/vsc";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRupeeSign } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Home = () => {

  return (
    <>
     {/* Header */}

        <div className="home-header-top">

          <div>
            
            <h3>Dashboard</h3>
          </div>

          <NavLink to="/notifications" className="header-icon">
            <IoMdNotificationsOutline />
            <span className="notification-dot"></span>
          </NavLink>

        </div>

      <div className="supplier-home">

       

        {/* Welcome Banner */}

        <div className="welcome-home-outer">

          <img src="./home.png" alt="Water Supply" />

          <div className="welcome-home-content">
            <p>Welcome back!</p>
            <h3>Water World</h3>
            <span>Your business is growing</span>
          </div>

        </div>


        {/* Order Summary */}

        <h3 className="section-heading">Order Summary</h3>

        <div className="home-outer-cards">

          <div className="home-card">

            <span className="order-icon">
              <FaCartFlatbed />
            </span>

            <div>
              <p>Total Orders</p>
              <h3>25</h3>
            </div>

          </div>


          <div className="home-card">

            <span className="deliver-icon">
              <GrDeliver />
            </span>

            <div>
              <p>Delivered</p>
              <h3>15</h3>
            </div>

          </div>


          <div className="home-card">

            <span className="pending-icon">
              <VscVmPending />
            </span>

            <div>
              <p>Pending</p>
              <h3>7</h3>
            </div>

          </div>


          <div className="home-card">

            <span className="cancel-icon">
              <MdOutlineFreeCancellation />
            </span>

            <div>
              <p>Cancelled</p>
              <h3>3</h3>
            </div>

          </div>

        </div>


        {/* Today's Summary */}

        <h3 className="section-heading">Today's Summary</h3>

        <div className="today-summary">

          <div className="today-card">

            <span className="today-icon">
              <FaBoxOpen />
            </span>

            <div>
              <p>Today's Orders</p>
              <h3>8</h3>
            </div>

          </div>


          <div className="today-card">

            <span className="today-icon">
              <FaRupeeSign />
            </span>

            <div>
              <p>Today's Earnings</p>
              <h3>₹1,250</h3>
            </div>

          </div>

        </div>


        {/* Quick Action */}

        <h3 className="quick-heading">Quick Action</h3>

        <div className="home-quick-action">

          <NavLink
            className="quick-action-box"
            to="/add-product"
          >

            <span className="add-product-icon">
              <FaPlus />
            </span>

            <div>
              <h4>Add Product</h4>
              <p>Add new water product</p>
            </div>

          </NavLink>


          <NavLink
            className="quick-action-box"
            to="/orders"
          >

            <span className="view-order-icon">
              <GrDeliver />
            </span>

            <div>
              <h4>View Orders</h4>
              <p>Manage customer orders</p>
            </div>

          </NavLink>

        </div>


        {/* Recent Orders */}

        <div className="recent-order-header">

          <h3 className="section-heading">
            Recent Orders
          </h3>

          <NavLink to="/orders">
            View All
            <MdOutlineArrowForwardIos />
          </NavLink>

        </div>


        <div className="recent-orders">


          {/* Order 1 */}

          <div className="recent-order-card">

            <div className="order-top">

              <div>
                <h4>#JM1005</h4>
                <p>Rahul Sharma</p>
              </div>

              <span className="order-status pending-status">
                Pending
              </span>

            </div>


            <div className="order-details">

              <div>
                <span>Product</span>
                <strong>Normal Water</strong>
              </div>

              <div>
                <span>Quantity</span>
                <strong>2 × 20L</strong>
              </div>

              <div>
                <span>Total</span>
                <strong>₹50</strong>
              </div>

            </div>

          </div>


          {/* Order 2 */}

          <div className="recent-order-card">

            <div className="order-top">

              <div>
                <h4>#JM1004</h4>
                <p>Priya Singh</p>
              </div>

              <span className="order-status preparing-status">
                Preparing
              </span>

            </div>


            <div className="order-details">

              <div>
                <span>Product</span>
                <strong>Cold Water</strong>
              </div>

              <div>
                <span>Quantity</span>
                <strong>1 × 20L</strong>
              </div>

              <div>
                <span>Total</span>
                <strong>₹35</strong>
              </div>

            </div>

          </div>


          {/* Order 3 */}

          <div className="recent-order-card">

            <div className="order-top">

              <div>
                <h4>#JM1003</h4>
                <p>Amit Verma</p>
              </div>

              <span className="order-status delivered-status">
                Delivered
              </span>

            </div>


            <div className="order-details">

              <div>
                <span>Product</span>
                <strong>Normal Water</strong>
              </div>

              <div>
                <span>Quantity</span>
                <strong>3 × 20L</strong>
              </div>

              <div>
                <span>Total</span>
                <strong>₹75</strong>
              </div>

            </div>

          </div>

        </div>


      </div>


      {/* Bottom Navigation */}

      <BottomBar />

    </>
  )
}

export default Home