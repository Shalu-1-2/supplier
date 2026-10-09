import React, { useState } from 'react'
import './CSS/Register.css'
import { useNavigate, Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const navigate = useNavigate()

    const [businessName, setBusinessName] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [waterType, setWaterType] = useState([])
    const [location, setLocation] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [supplyRange, setSupplyRange] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    // Water type checkbox toggle
    const handleWaterType = (type) => {
        if (waterType.includes(type)) {
            setWaterType(waterType.filter((t) => t !== type))
        } else {
            setWaterType([...waterType, type])
        }
    }

    const handleRegister = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match")
            return
        }

        if (waterType.length === 0) {
            alert("Please select at least one water type")
            return
        }

        const supplier = {
            businessName,
            name,
            phone,
            waterType,
            location,
            address,
            email,
            password,
            supplyRange
        }

        localStorage.setItem("supplier", JSON.stringify(supplier))

        alert("Supplier Registered Successfully")

        navigate("/login")
    }

    return (
        <>
            <div className="mobile-container">

                <div className="header">
                    <div className="logo-box">
                        <span className="brand-name">WaterSupply</span>
                    </div>

                    <h1 className="page-title">Supplier Registration</h1>

                    <p className="page-subtitle">Create your supplier account</p>
                </div>

                <form className="registration-form" onSubmit={handleRegister}>

                    {/* Business Name */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="businessName">
                            Business Name
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="businessName"
                                className="form-input"
                                placeholder="Enter business name"
                                value={businessName}
                                onChange={(e) => setBusinessName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Full Name */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="name">
                            Full Name
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="name"
                                className="form-input"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                            Phone Number
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="tel"
                                id="phone"
                                className="form-input"
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Water Type */}
                    <div className="form-group">
                        <label className="form-label">Type of Water</label>
                        <div className="input-wrapper">
                            <div className="water-type-options">
                                <label className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        value="cold"
                                        checked={waterType.includes("cold")}
                                        onChange={() => handleWaterType("cold")}
                                    />
                                    <span>Cold Water</span>
                                </label>

                                <label className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        value="normal"
                                        checked={waterType.includes("normal")}
                                        onChange={() => handleWaterType("normal")}
                                    />
                                    <span>Normal Water</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="location">
                            Location
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="location"
                                className="form-input"
                                placeholder="e.g. Aliganj, Lucknow"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Address */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="address">
                            Address
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="address"
                                className="form-input"
                                placeholder="Enter full address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                id="email"
                                className="form-input"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <div className="input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                className="form-input password-input"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <div className="input-wrapper">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirm-password"
                                className="form-input password-input"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="toggle-password"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Supply Range */}
                    <div className="form-group">
                        <label className="form-label" htmlFor="range">
                            Supply Range
                        </label>
                        <div className="input-wrapper">
                            <input
                                type="text"
                                id="range"
                                className="form-input"
                                placeholder="e.g. 10 KM"
                                value={supplyRange}
                                onChange={(e) => setSupplyRange(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">
                        REGISTER
                    </button>

                    <div className="login-link">
                        Already have an account?
                        <Link to="/login">Login</Link>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Register