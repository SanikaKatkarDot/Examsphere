import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Adminlogin.css";

export default function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/admin/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                // Store admin info in localStorage
                localStorage.setItem("admin", JSON.stringify(data.admin));
                window.dispatchEvent(new Event("exam-auth-change"));
                navigate("/admindashboard");
            } else {
                setError(data.message || "Invalid Email or Password");
            }
        } catch (error) {
            setError("Unable to connect to server");
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="admin-login-page">

            {/* Background Effects */}
            <div className="admin-orb orb-one"></div>
            <div className="admin-orb orb-two"></div>
            <div className="admin-orb orb-three"></div>

            {/* Login Card */}
            <div className="admin-login-card">

                {/* Header */}
                <div className="admin-login-header">

                    <div className="admin-logo">
                        🛡️
                    </div>

                    <span className="admin-badge">
                        ADMINISTRATOR
                    </span>

                    <h1>
                        Admin <span>Login</span>
                    </h1>

                    <p>
                        Secure access to your Online Exam Portal
                    </p>

                </div>

                {/* Error Message */}
                {error && (
                    <div className="error-message">
                        ✕ {error}
                    </div>
                )}

                {/* Form */}
                <form
                    className="admin-login-form"
                    onSubmit={handleSubmit}
                >

                    {/* Email */}
                    <div className="admin-form-group">

                        <label>
                            Admin Email
                        </label>

                        <div className="admin-input-box">

                            <span>✉</span>

                            <input
                                type="email"
                                placeholder="Enter admin email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                required
                            />

                        </div>

                    </div>


                    {/* Password */}
                    <div className="admin-form-group">

                        <div className="password-label">

                            <label>
                                Password
                            </label>

                            <button type="button">
                                Forgot Password?
                            </button>

                        </div>

                        <div className="admin-input-box">

                            <span>🔒</span>

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
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


                    {/* Remember */}
                    <div className="admin-options">

                        <label className="remember-me">

                            <input type="checkbox" />

                            <span>
                                Remember me
                            </span>

                        </label>

                        <span className="secure-text">
                            🔐 Secure Login
                        </span>

                    </div>


                    {/* Login Button */}
                    <button
                        type="submit"
                        className="admin-login-button"
                        disabled={loading}
                    >

                        <span>
                            {loading ? "Logging in..." : "Login to Dashboard"}
                        </span>

                        <strong>
                            {loading ? "⏳" : "→"}
                        </strong>

                    </button>

                </form>


                {/* Footer */}
                <div className="admin-login-footer">

                    <p>
                        Don't have an account?{" "}
                        <Link to="/adminregister">
                            Register here
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