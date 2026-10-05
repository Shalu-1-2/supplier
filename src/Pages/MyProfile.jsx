import React from "react";

import { FiArrowLeft } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiPackage } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { FaStore } from "react-icons/fa";

import "../Pages/CSS/MyProfile.css";

import { NavLink } from "react-router-dom";
import BottomBar from "../Components/BottomBar";


const MyProfile = () => {

    // Supplier details localStorage se lena

    const savedSupplier =
        localStorage.getItem("jalmitraSupplier");

    const supplier = savedSupplier
        ? JSON.parse(savedSupplier)
        : null;


    return (
        <>

            <div className="supplier-profile-page">

                <div className="supplier-profile-container">


                    {/* Header */}

                    <div className="supplier-profile-header">

                        <NavLink to="/home">

                            <FiArrowLeft className="supplier-back-icon" />

                        </NavLink>

                        <h2>Supplier Profile</h2>

                    </div>



                    {/* Supplier Basic Card */}

                    <div className="supplier-user-card">

                        <div className="supplier-image">

                            <FaStore className="supplier-store-icon" />

                        </div>


                        <div className="supplier-info">

                            <h3>
                                {supplier?.businessName ||
                                    "Your Business"}
                            </h3>

                            <p>

                                <span>
                                    <FiUser />
                                </span>

                                {supplier?.ownerName ||
                                    "Owner name not added"}

                            </p>

                        </div>

                    </div>



                    {/* Supplier Details */}

                    <div className="supplier-details">

                        <h3>Business Details</h3>


                        {/* Business Name */}

                        <div className="supplier-detail-item">

                            <div className="supplier-detail-icon">

                                <FaStore />

                            </div>

                            <div className="supplier-detail-info">

                                <span>Business Name</span>

                                <strong>
                                    {supplier?.businessName ||
                                        "Not available"}
                                </strong>

                            </div>

                        </div>



                        {/* Owner Name */}

                        <div className="supplier-detail-item">

                            <div className="supplier-detail-icon">

                                <FiUser />

                            </div>

                            <div className="supplier-detail-info">

                                <span>Owner Name</span>

                                <strong>
                                    {supplier?.ownerName ||
                                        "Not available"}
                                </strong>

                            </div>

                        </div>



                        {/* Mobile */}

                        <div className="supplier-detail-item">

                            <div className="supplier-detail-icon">

                                <MdPhone />

                            </div>

                            <div className="supplier-detail-info">

                                <span>Mobile Number</span>

                                <strong>
                                    {supplier?.mobile ||
                                        "Not available"}
                                </strong>

                            </div>

                        </div>



                        {/* Location */}

                        <div className="supplier-detail-item">

                            <div className="supplier-detail-icon">

                                <FiMapPin />

                            </div>

                            <div className="supplier-detail-info">

                                <span>Location</span>

                                <strong>
                                    {supplier?.location ||
                                        "Not available"}
                                </strong>

                            </div>

                        </div>



                        {/* Address */}

                        <div className="supplier-detail-item">

                            <div className="supplier-detail-icon">

                                <FaHome />

                            </div>

                            <div className="supplier-detail-info">

                                <span>Address</span>

                                <strong>
                                    {supplier?.address ||
                                        "Not available"}
                                </strong>

                            </div>

                        </div>

                    </div>



                    {/* Supplier Menu */}

                    <div className="supplier-profile-menu">


                        {/* Products */}

                        <NavLink
                            to="/products"
                            className="supplier-menu-item"
                        >

                            <div className="supplier-menu-left">

                                <div className="supplier-menu-icon">

                                    <FiPackage />

                                </div>

                                <span>My Products</span>

                            </div>

                            <FiChevronRight className="supplier-chevron" />

                        </NavLink>



                        {/* Orders */}

                        <NavLink
                            to="/orders"
                            className="supplier-menu-item"
                        >

                            <div className="supplier-menu-left">

                                <div className="supplier-menu-icon">

                                    <FaStore />

                                </div>

                                <span>My Orders</span>

                            </div>

                            <FiChevronRight className="supplier-chevron" />

                        </NavLink>



                        {/* Business Details */}

                        <div className="supplier-menu-item">

                            <div className="supplier-menu-left">

                                <div className="supplier-menu-icon">

                                    <FiMapPin />

                                </div>

                                <span>Business Details</span>

                            </div>

                            <FiChevronRight className="supplier-chevron" />

                        </div>



                        {/* Settings */}

                        <div className="supplier-menu-item">

                            <div className="supplier-menu-left">

                                <div className="supplier-menu-icon">

                                    <FiSettings />

                                </div>

                                <span>Settings</span>

                            </div>

                            <FiChevronRight className="supplier-chevron" />

                        </div>



                        {/* Logout */}

                        <div className="supplier-menu-item logout-item">

                            <div className="supplier-menu-left">

                                <div className="supplier-menu-icon logout-icon">

                                    <FiLogOut />

                                </div>

                                <span>Logout</span>

                            </div>

                            <FiChevronRight className="supplier-chevron" />

                        </div>


                    </div>


                </div>

            </div>


            {/* Bottom Navigation */}

            <BottomBar />

        </>
    );
};


export default MyProfile;