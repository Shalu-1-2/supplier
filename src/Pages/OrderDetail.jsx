import React from 'react'
import "../Pages/CSS/OrderDetail.css"
import { IoArrowBack } from "react-icons/io5";

const OrderDetail = () => {
    return (
        <>

            <div className="order-details-header-outer">
                <div className="order-detail-icon">
                    <span><IoArrowBack /></span>
                </div>
                <div className="order-detail-content">
                    <h3>Order Details</h3>
                </div>
                <div className="order-details-outer">
                    <div className="order-detail">
                        <h2>#ORD001</h2>

                    </div>
                    <div className="Order-text">
                        <p>Pending</p>
                    </div>
                    <p>Placed on 10 April 2025 11.30</p>

                </div>




            </div>



        </>
    )
}

export default OrderDetail
