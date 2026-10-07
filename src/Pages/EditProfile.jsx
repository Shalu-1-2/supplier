import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./EditProfile.css";
import BottomBar from "../Components/BottomBar";

const EditProfile = () => {
    const navigate = useNavigate();

    // Purana data localStorage se
    const savedSupplier = JSON.parse(localStorage.getItem("supplier")) || {};

    const [businessName, setBusinessName] = useState(savedSupplier.businessName || "");
    const [name, setName] = useState(savedSupplier.name || "");
    const [phone, setPhone] = useState(savedSupplier.phone || "");
    const [email, setEmail] = useState(savedSupplier.email || "");
    const [location, setLocation] = useState(savedSupplier.location || "");
    const [address, setAddress] = useState(savedSupplier.address || "");
    const [supplyRange, setSupplyRange] = useState(savedSupplier.supplyRange || "");
    const [waterType, setWaterType] = useState(savedSupplier.waterType || []);

    const handleWaterType = (type) => {
        if (waterType.includes(type)) {
            setWaterType(waterType.filter((t) => t !== type));
        } else {
            setWaterType([...waterType, type]);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10 digit mobile number");
            return;
        }

        if (waterType.length === 0) {
            alert("Please select at least one water type");
            return;
        }

        // ...savedSupplier se password jaisi baaki cheezein bachi rahengi
        const updatedSupplier = {
            ...savedSupplier,
            businessName,
            name,
            phone,
            email,
            location,
            address,
            supplyRange,
            waterType,
        };

        localStorage.setItem("supplier", JSON.stringify(updatedSupplier));

        alert("Profile updated successfully");
        navigate("/profile"); // apna profile route yahan daalo
    };

    return (
        <>
            <div className="ep-page">
                <div className="ep-container">

                    {/* Header */}
                    <div className="ep-header">
                        <NavLink to="/profile" className="ep-back">
                            <FiArrowLeft />
                        </NavLink>
                        <h2>Edit Profile</h2>
                        <span className="ep-placeholder"></span>
                    </div>

                    <form className="ep-form" onSubmit={handleSave}>

                        <div className="ep-group">
                            <label htmlFor="businessName">Business Name</label>
                            <input
                                id="businessName"
                                type="text"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label htmlFor="name">Owner Name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label htmlFor="phone">Mobile Number</label>
                            <input
                                id="phone"
                                type="tel"
                                maxLength={10}
                                value={phone}
                                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label htmlFor="location">Location</label>
                            <input
                                id="location"
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label htmlFor="address">Address</label>
                            <textarea
                                id="address"
                                rows="3"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label htmlFor="supplyRange">Supply Radius</label>
                            <input
                                id="supplyRange"
                                type="text"
                                placeholder="e.g. 10 KM"
                                value={supplyRange}
                                onChange={(e) => setSupplyRange(e.target.value)}
                                required
                            />
                        </div>

                        <div className="ep-group">
                            <label>Type of Water</label>
                            <div className="ep-checks">
                                <label className="ep-check">
                                    <input
                                        type="checkbox"
                                        checked={waterType.includes("cold")}
                                        onChange={() => handleWaterType("cold")}
                                    />
                                    <span>Cold Water</span>
                                </label>

                                <label className="ep-check">
                                    <input
                                        type="checkbox"
                                        checked={waterType.includes("normal")}
                                        onChange={() => handleWaterType("normal")}
                                    />
                                    <span>Normal Water</span>
                                </label>
                            </div>
                        </div>

                        <div className="ep-actions">
                            <button
                                type="button"
                                className="ep-cancel"
                                onClick={() => navigate("/profile")}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="ep-save">
                                Save Changes
                            </button>
                        </div>

                    </form>
                </div>
            </div>

            <BottomBar />
        </>
    );
};

export default EditProfile;