import React, { useState } from 'react'
import './CSS/Register.css'
import { useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [waterType, setWaterType] = useState([]);
    const [location, setLocation] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [supplyRange, setSupplyRange] = useState("")

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const handleRegister = (e) => {
        e.preventDefault()

        if (password !== confirmPassword) {
            alert("Password and Confirm Password do not match")
            return
        }

        const supplier = {
            name,
            phone,
            waterType,
            location,
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


                        <span className="brand-name">
                            WaterSupply
                        </span>

                    </div>

                    <h1 className="page-title">
                        Supplier Registration
                    </h1>

                    <p className="page-subtitle">
                        Create your supplier account
                    </p>

                </div>

                <form
                    className="registration-form"
                    onSubmit={handleRegister}
                >

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="name"
                        >
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

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="phone"
                        >
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

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="water-type"
                        >
                            Type of Water
                        </label>

                        <div className="input-wrapper">

                            <div className="water-type-options">
                                <label className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        value="cold"
                                        checked={waterType.includes("cold")}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setWaterType([...waterType, "cold"])
                                            } else {
                                                setWaterType(
                                                    waterType.filter((type) => type !== "cold")
                                                )
                                            }
                                        }}
                                    />
                                    <span>Cold Water</span>
                                </label>

                                <label className="checkbox-option">
                                    <input
                                        type="checkbox"
                                        value="normal"
                                        checked={waterType.includes("normal")}
                                        onChange={(e) => {
                                            if (e.target.checked) {
                                                setWaterType([...waterType, "normal"])
                                            } else {
                                                setWaterType(
                                                    waterType.filter((type) => type !== "normal")
                                                )
                                            }
                                        }}
                                    />
                                    <span>Normal Water</span>
                                </label>
                            </div>
                        </div>

                    </div>

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="location"
                        >
                            Location
                        </label>

                        <div className="input-wrapper">

                            <input
                                type="text"
                                id="location"
                                className="form-input"
                                placeholder="Enter your location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                required
                            />

                        </div>

                    </div>

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="email"
                        >
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

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="password"
                        >
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

                                <FaEye />


                            </button>

                        </div>

                    </div>

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="confirm-password"
                        >
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
                                aria-label="Toggle password visibility"
                            >

                                <FaEye />

                            </button>

                        </div>

                    </div>

                    <div className="form-group">

                        <label
                            className="form-label"
                            htmlFor="range"
                        >
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

                    <button
                        type="submit"
                        className="submit-btn"
                    >
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