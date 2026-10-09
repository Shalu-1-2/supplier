
import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "../Components/CSS/Notification.css";

const Notification = () => {
    const [isOpen, setIsOpen] = useState(false);

    const notifications = [
        {
            id: 1,
            title: "New Order Received",
            message: "You have received a new water order.",
            time: "Just now"
        },
        {
            id: 2,
            title: "Stock Reminder",
            message: "Please check your available stock.",
            time: "10 minutes ago"
        },
        {
            id: 3,
            title: "Order Update",
            message: "Your order has been updated successfully.",
            time: "1 hour ago"
        }
    ];

    return (
        <div className="notification-wrapper">
            <button
                type="button"
                className="notification-bell"
                onClick={() => setIsOpen(prev => !prev)}
            >
                <FaBell />
                <span className="notification-count">
                    {notifications.length}
                </span>
            </button>

            {isOpen && (
                <div className="notification-popup">
                    <div className="notification-popup-header">
                        <div>
                            <h3>Notifications</h3>
                            <p>Your latest updates</p>
                        </div>

                        <button
                            type="button"
                            className="notification-close"
                            onClick={() => setIsOpen(false)}
                        >
                            <IoClose />
                        </button>
                    </div>

                    {notifications.map(item => (
                        <div className="notification-item" key={item.id}>
                            <div className="notification-item-icon">
                                <FaBell />
                            </div>

                            <div className="notification-item-info">
                                <h4>{item.title}</h4>
                                <p>{item.message}</p>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Notification;