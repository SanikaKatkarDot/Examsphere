import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminRegister.css";

export default function AdminRegister() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {
        // If admin is already logged in, redirect to dashboard
        const adminData = localStorage.getItem("admin");
        if (adminData) {
            navigate("/admindashboard");
        }

        // If user is logged in, redirect to tests
        const userData = localStorage.getItem("examUser");
        if (userData) {
            navigate("/tests");
        }
    }, [navigate]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessage("");
        setError("");

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Validate password length
        if (formData.password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        password: formData.password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                setMessage(data.message);
                setFormData({
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                });

                // Redirect to admin login after 2 seconds
                setTimeout(() => {
                    navigate("/adminlogin");
                }, 2000);

            } else {
                setError(data.message || "Registration failed");
            }

        } catch (error) {
            setError("Unable to connect to server");
            console.log(error);
        }
    };

    return (
        <div className="admin-register-page">

            {/* Background Effects */}
            <div className="admin-orb orb-one"></div>
            <div className="admin-orb orb-two"></div>
            <div className="admin-orb orb-three"></div>

            {/* Register Card */}
            <div className="admin-register-card">

                {/* Header */}
                <div className="admin-register-header">

                    <div className="admin-logo">
                        🛡️
                    </div>

                    <span className="admin-badge">
                        ADMINISTRATOR
                    </span>

                    <h1>
                        Create <span>Admin Account</span>
                    </h1>

                    <p>
                        Register as an administrator for your Online Exam Portal
                    </p>

                </div>

                {/* Messages */}
                {message && (
                    <div className="success-message">
                        ✓ {message}
                    </div>
                )}

                {error && (
                    <div className="error-message">
                        ✕ {error}
                    </div>
                )}

                {/* Form */}
                <form
                    className="admin-register-form"
                    onSubmit={handleSubmit}
                >

                    {/* Name */}
                    <div className="admin-form-group">

                        <label>
                            Full Name
                        </label>

                        <div className="admin-input-box">

                            <span>👤</span>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    {/* Email */}
                    <div className="admin-form-group">

                        <label>
                            Admin Email
                        </label>

                        <div className="admin-input-box">

                            <span>✉</span>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter admin email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                        </div>

                    </div>

                    {/* Password */}
                    <div className="admin-form-group">

                        <label>
                            Password
                        </label>

                        <div className="admin-input-box">

                            <span>🔒</span>

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                name="password"
                                placeholder="Enter password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowPassword(!showPassword)
                                }
                            >
                                {showPassword ? "🙈" : "👁"}
                            </button>

                        </div>

                    </div>

                    {/* Confirm Password */}
                    <div className="admin-form-group">

                        <label>
                            Confirm Password
                        </label>

                        <div className="admin-input-box">

                            <span>🔒</span>

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                }
                            >
                                {showConfirmPassword ? "🙈" : "👁"}
                            </button>

                        </div>

                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="admin-register-button"
                    >

                        <span>
                            Create Admin Account
                        </span>

                        <strong>
                            →
                        </strong>

                    </button>

                </form>

                {/* Footer */}
                <div className="admin-register-footer">

                    <p>
                        Already have an account?{" "}
                        <Link to="/adminlogin">
                            Login here
                        </Link>
                    </p>

                    <span>
                        •
                    </span>

                    <Link to="/">
                        ← Back to Home
                    </Link>

                </div>

            </div>

        </div>
    );
}
