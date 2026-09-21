
import React from "react";
import "../Pages/CSS/OrderDetail.css";
import { IoArrowBack } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaBottleWater } from "react-icons/fa6";

const OrderDetail = () => {

    const handleBack = () => {
        window.history.back();
    };

    const handleUpdateStatus = () => {
        alert("Order status updated!");
    };

    return (
        <div className="order-details-page">

            {/* Header */}
            <div className="order-details-header">

                <button
                    className="order-back-btn"
                    onClick={handleBack}
                >
                    <IoArrowBack />
                </button>

                <h3>Order Details</h3>

            </div>

            {/* Main Content */}
            <div className="order-details-container">

                {/* Order Summary */}
                <div className="order-summary">

                    <div className="order-summary-top">

                        <h2>#ORD001</h2>

                        <span className="order-status">
                            Pending
                        </span>

                    </div>

                    <p className="order-date">
                        Placed on 10 April 2025
                        <span> • 11:30 AM</span>
                    </p>

                </div>

                {/* Customer Details */}
                <div className="customer-details">

                    <h3 className="section-title">
                        <FaUser />
                        Customer Details
                    </h3>

                    <div className="customer-info">

                        <div className="info-row">
                            <span className="info-label">Name:</span>
                            <span>Shriya Mishra</span>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Mobile:</span>
                            <span>+91 98765 43210</span>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Location:</span>
                            <span>Aliganj, Lucknow</span>
                        </div>

                        <div className="info-row">
                            <span className="info-label">Address:</span>
                            <span>House No. 25, Aliganj</span>
                        </div>

                    </div>

                </div>

                {/* Ordered Products */}
                <div className="ordered-products">

                    <h3 className="section-title">
                        Ordered Products
                    </h3>

                    <div className="product-list">

                        {/* Product 1 */}
                        <div className="product-item">

                            <div className="product-icon">
                                <FaBottleWater />
                            </div>

                            <div className="product-name">
                                <span>20 Litre Jar</span>
                            </div>

                            <div className="product-quantity">
                                x 2
                            </div>

                            <div className="product-price">
                                ₹120
                            </div>

                        </div>

                        {/* Product 2 */}
                        <div className="product-item">

                            <div className="product-icon">
                                <FaBottleWater />
                            </div>

                            <div className="product-name">
                                <span>1 Litre Bottle</span>
                            </div>

                            <div className="product-quantity">
                                x 5
                            </div>

                            <div className="product-price">
                                ₹75
                            </div>

                        </div>

                        {/* Product 3 */}
                        <div className="product-item">

                            <div className="product-icon">
                                <FaBottleWater />
                            </div>

                            <div className="product-name">
                                <span>500 ml Bottle</span>
                            </div>

                            <div className="product-quantity">
                                x 3
                            </div>

                            <div className="product-price">
                                ₹30
                            </div>

                        </div>

                    </div>

                </div>

                {/* Total Amount */}
                <div className="total-amount">

                    <span>Total Amount</span>

                    <strong>₹320</strong>

                </div>

                {/* Update Status Button */}
                <button
                    className="update-status-btn"
                    onClick={handleUpdateStatus}
                >
                    Update Status
                </button>

            </div>

        </div>
    );
};

export default OrderDetail;