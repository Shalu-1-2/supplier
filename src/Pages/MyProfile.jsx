import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { FiArrowLeft, FiEdit, FiUser, FiMapPin, FiMail, FiLogOut } from "react-icons/fi";
import { MdPhone, MdWaterDrop, MdLocalShipping } from "react-icons/md";
import { FaStar, FaHome } from "react-icons/fa";

import "../Pages/CSS/MyProfile.css";
import BottomBar from "../Components/BottomBar";

const MyProfile = () => {
    const navigate = useNavigate();

    // Register me "supplier" key se save hota hai
    const savedSupplier = localStorage.getItem("supplier");
    const supplier = savedSupplier ? JSON.parse(savedSupplier) : null;

    // "10" aaye to "10 km" dikhao, "10 KM" aaye to waisa hi rakho
    const radius = supplier?.supplyRange
        ? /[a-zA-Z]/.test(supplier.supplyRange)
            ? supplier.supplyRange
            : `${supplier.supplyRange} km`
        : null;

    const handleLogout = () => {
        navigate("/login", { replace: true });
    };

    const details = [
        { icon: <FiUser />, label: "Owner Name", value: supplier?.name },
        { icon: <MdPhone />, label: "Mobile", value: supplier?.phone },
        { icon: <FiMail />, label: "Email", value: supplier?.email },
        { icon: <FiMapPin />, label: "Location", value: supplier?.location },
        { icon: <FaHome />, label: "Address", value: supplier?.address },
        { icon: <MdLocalShipping />, label: "Supply Radius", value: radius },
    ];

    return (
        <>
            <div className="sp-page">
                <div className="sp-container">

                    {/* Header */}
                    <div className="sp-header">
                        <NavLink to="/home" className="sp-header-btn">
                            <FiArrowLeft />
                        </NavLink>

                        <h2>My Profile</h2>

                        <NavLink to="/edit-profile" className="sp-header-btn sp-edit">
                            <FiEdit />
                        </NavLink>
                    </div>

                    {/* Logo + Status */}
                    <div className="sp-top">
                        <div className="sp-logo-wrap">
                            <div className="sp-logo">
                                <MdWaterDrop className="sp-logo-icon" />
                                <span>JalMitra</span>
                            </div>
                            <span className="sp-status">Active</span>
                        </div>

                        <h3 className="sp-business">
                            {supplier?.businessName || "Your Business"}
                        </h3>

                        <div className="sp-rating">
                            <FaStar className="sp-star" />
                            <strong>{supplier?.rating || "0.0"}</strong>
                            <span>({supplier?.reviews || 0} reviews)</span>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="sp-details">
                        {details.map((item, index) => (
                            <div className="sp-row" key={index}>
                                <div className="sp-row-icon">{item.icon}</div>
                                <span className="sp-row-label">{item.label}</span>
                                <strong className="sp-row-value">
                                    {item.value || "Not available"}
                                </strong>
                            </div>
                        ))}
                    </div>

                    {/* Logout */}
                    <button className="sp-logout" onClick={handleLogout}>
                        <FiLogOut />
                        <span>Logout</span>
                    </button>

                </div>
            </div>

            <BottomBar />
        </>
    );
};

export default MyProfile;