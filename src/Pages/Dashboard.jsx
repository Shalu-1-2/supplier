import React from 'react'
import './CSS/Dashboard.css'
import { IoNotificationsCircleOutline } from "react-icons/io5";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-container">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <div className="dashboard-icon">
              <IoNotificationsCircleOutline />

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard