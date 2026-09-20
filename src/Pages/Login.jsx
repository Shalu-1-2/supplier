import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/Login.css'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const handleLogin = (e) => {

        e.preventDefault()

        const supplierData = JSON.parse(localStorage.getItem("supplier"))

        if (!supplierData) {
            alert("Please register first")
            return
        }

        if (
            supplierData.email === email &&
            supplierData.password === password
        ) {
            localStorage.setItem("isLoggedIn", "true")

            alert("Login Successful")

            navigate("/Home")
        } else {
            alert("Invalid Email or Password")
        }
    }

    return (
        <div className="login-container">

            <div className="login-header">

                <div className="login-logo-box">

                 

                    <span className="login-brand-name">
                        <img src="./public/logo-bg.png" alt=""  />
                    </span>

                </div>

                <h1 className="login-title">
                    Supplier Login
                </h1>

                <p className="login-subtitle">
                    Login to manage your water supply
                </p>

            </div>

            <form
                className="login-form"
                onSubmit={handleLogin}
            >

                <div className="login-form-group">

                    <label
                        className="login-label"
                        htmlFor="email"
                    >
                        Email
                    </label>

                    <input
                        type="email"
                        id="email"
                        className="login-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                <div className="login-form-group">

                    <label
                        className="login-label"
                        htmlFor="password"
                    >
                        Password
                    </label>

                    <div className="login-password-wrapper">

                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            className="login-input login-password-input"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="button"
                            className="login-toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >

                            <svg viewBox="0 0 24 24">

                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />

                            </svg>

                        </button>

                    </div>

                </div>

                <div className="login-options">

                    <label className="remember-me">

                        <input type="checkbox" />

                        <span>Remember me</span>

                    </label>

                    <button
                        type="button"
                        className="forgot-password"
                    >
                        Forgot Password?
                    </button>

                </div>

                <button
                    type="submit"
                    className="login-submit-btn"
                >
                    LOGIN
                </button>

            </form>

            <div className="register-link">

                <span>
                    Don't have an account?
                </span>

                <button
                    type="button"
                    onClick={() => navigate("/register")}
                >
                    Register
                </button>

            </div>

        </div>
    )
}

export default Login