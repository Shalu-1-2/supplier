
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    FiArrowLeft,
    FiEdit,
    FiUser,
    FiMapPin,
    FiMail,
    FiLogOut,
    FiPhone,
    FiChevronRight,
    FiStar,
    FiPackage
} from "react-icons/fi";
import { MdWaterDrop } from "react-icons/md";

import "../Pages/CSS/MyProfile.css";
import BottomBar from "../Components/BottomBar";

const MyProfile = () => {
    const navigate = useNavigate();

    const savedSupplier = localStorage.getItem("supplier");
    const supplier = savedSupplier ? JSON.parse(savedSupplier) : null;

    const radius = supplier?.supplyRange
        ? /[a-zA-Z]/.test(supplier.supplyRange)
            ? supplier.supplyRange
            : `${supplier.supplyRange} km`
        : "Not available";

    const waterTypes = Array.isArray(supplier?.waterType)
        ? supplier.waterType
            .map(type => type.charAt(0).toUpperCase() + type.slice(1))
            .join(", ")
        : "Not available";

    const handleLogout = () => {
        navigate("/login", { replace: true });
    };

    return (
        <>
            <div className="sp-page">
                <div className="sp-container">

                    <header className="sp-header">
                        <button
                            type="button"
                            className="sp-back"
                            onClick={() => navigate(-1)}
                        >
                            <FiArrowLeft />
                        </button>

                        <h2>My Profile</h2>

                        <NavLink
                            to="/edit-profile"
                            className="sp-edit"
                            aria-label="Edit Profile"
                        >
                            <FiEdit />
                        </NavLink>
                    </header>

                    <section className="sp-profile-card">
                        <div className="sp-profile-image-wrap">
                            {supplier?.image ? (
                                <img
                                    src={supplier.image}
                                    alt="Supplier Profile"
                                    className="sp-profile-image"
                                />
                            ) : (
                                <MdWaterDrop className="sp-default-image" />
                            )}
                        </div>

                        <h3>{supplier?.businessName || "Your Business"}</h3>

                        <p className="sp-owner-name">
                            {supplier?.name || "Supplier Name"}
                        </p>

                        <div className="sp-location">
                            <FiMapPin />
                            <span>{supplier?.location || "Location not added"}</span>
                        </div>

                        <div className="sp-contact-details">
                            <div className="sp-contact-row">
                                <FiPhone />
                                <span>{supplier?.phone || "Phone not added"}</span>
                            </div>

                            <div className="sp-contact-row">
                                <FiMail />
                                <span>{supplier?.email || "Email not added"}</span>
                            </div>
                        </div>
                    </section>

                    <section className="sp-stats">
                        <div className="sp-stat-item">
                            <FiPackage />
                            <strong>{radius}</strong>
                            <span>Supply Radius</span>
                        </div>

                        <div className="sp-stat-item">
                            <FiStar />
                            <strong>{supplier?.rating || "0.0"}</strong>
                            <span>
                                {supplier?.reviews || 0} Reviews
                            </span>
                        </div>
                    </section>

                    <section className="sp-menu">
                        <p className="sp-menu-heading">ACCOUNT</p>

                        <NavLink
                            to="/edit-profile"
                            className="sp-menu-item"
                        >
                            <span className="sp-menu-icon">
                                <FiUser />
                            </span>

                            <span className="sp-menu-text">
                                <strong>Edit Profile</strong>
                                <small>Update your personal details</small>
                            </span>

                            <FiChevronRight className="sp-menu-arrow" />
                        </NavLink>

                        <NavLink
                            to="/customer-review"
                            className="sp-menu-item"
                        >
                            <span className="sp-menu-icon sp-review-icon">
                                <FiStar />
                            </span>

                            <span className="sp-menu-text">
                                <strong>Customer Reviews</strong>
                                <small>View customer feedback and ratings</small>
                            </span>

                            <FiChevronRight className="sp-menu-arrow" />
                        </NavLink>

                        <div className="sp-menu-item sp-water-item">
                            <span className="sp-menu-icon">
                                <MdWaterDrop />
                            </span>

                            <span className="sp-menu-text">
                                <strong>Water Supply</strong>
                                <small>{waterTypes}</small>
                            </span>
                        </div>

                        <div className="sp-menu-item sp-address-item">
                            <span className="sp-menu-icon">
                                <FiMapPin />
                            </span>

                            <span className="sp-menu-text">
                                <strong>Business Address</strong>
                                <small>
                                    {supplier?.address || "Address not added"}
                                </small>
                            </span>
                        </div>
                    </section>

                    <button
                        type="button"
                        className="sp-logout"
                        onClick={handleLogout}
                    >
                        <FiLogOut />
                        <span>Log out</span>
                    </button>

                  

                </div>
            </div>

            <BottomBar />
        </>
    );
};

export default MyProfile;
